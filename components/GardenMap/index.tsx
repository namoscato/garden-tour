import { useWindowWidth } from "@react-hook/window-size";
import Dates from "components/Dates";
import GoogleMapReact, { Bounds, Coords } from "google-map-react";
import { Garden, ParticipationOption } from "lib/gardensProvider/types";
import { sendEvent } from "lib/gtag";
import Link from "next/link";
import { TITLE } from "pages/_app";
import { SyntheticEvent, useEffect, useMemo, useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import CurrentLocationButton from "./CurrentLocationButton";
import {
  cardWidthFromWindowWidth,
  desktopBreakpoint,
  mapOptionsFromWindowWidth,
  mapPropsFromWindowWidth,
} from "./functions";
import GardenCard from "./GardenCard";
import classes from "./GardenMap.module.scss";
import GardenMarker from "./GardenMarker";
import { useCurrentLocation } from "./hooks";
import ParticipationFilterMenu from "./ParticipationFilterMenu";

const CURRENT_LOCATION_NUMBER = -1;

interface Props {
  gardens: Garden[];
}

export default function GardenMap(props: Props) {
  const navigation = useRef<HTMLDivElement | null>(null);
  const gardenItems = useRef<Record<number, HTMLLIElement | null>>({});

  const windowWidth = useWindowWidth();
  const [mapProps] = useState(mapPropsFromWindowWidth(windowWidth));
  const [mapOptions] = useState(mapOptionsFromWindowWidth(windowWidth));
  const [center, setCenter] = useState<Coords | undefined>(
    mapProps.defaultCenter
  );

  const [marginBounds, setMarginBounds] = useState<Bounds>();
  const [latLngBounds, setLatLngBounds] = useState<google.maps.LatLngBounds>();
  const initializeBounds = () => {
    if (marginBounds && undefined !== window.google) {
      setLatLngBounds(
        new google.maps.LatLngBounds(
          new google.maps.LatLng(marginBounds.sw),
          new google.maps.LatLng(marginBounds.ne)
        )
      );
    }
  };
  useEffect(initializeBounds, [marginBounds]);

  const margin = useMemo<number[]>(() => {
    if (desktopBreakpoint(windowWidth)) {
      return [0, 0, 0, 0];
    }

    return [0, 0, navigation.current?.clientHeight ?? 0, 0];
  }, [windowWidth]);

  const { getCurrentLocation, currentLocation } = useCurrentLocation();
  const clickCurrentLocation = () => {
    getCurrentLocation();
    setActiveGarden(CURRENT_LOCATION_NUMBER);
    sendEvent("click", "guide", "current location");
  };

  const [participationFilter, setParticipationFilter] = useState<
    Map<ParticipationOption, boolean>
  >(new Map());
  const gardens = useMemo<Garden[]>(() => {
    const checkedParticipation = Array.from(participationFilter.entries())
      .filter(([, checked]) => checked)
      .map(([participation]) => participation);

    return props.gardens.filter(({ participation }) => {
      return (
        0 === checkedParticipation.length ||
        checkedParticipation.some((value) => participation.includes(value))
      );
    });
  }, [participationFilter, props.gardens]);

  const [activeGarden, setActiveGarden] = useState<number | undefined>(() => {
    return desktopBreakpoint(windowWidth) ? undefined : gardens[0]?.number;
  });
  useEffect(() => {
    const garden = gardens.find(({ number }) => number === activeGarden);

    if (CURRENT_LOCATION_NUMBER === activeGarden && currentLocation) {
      setCenter(currentLocation);
    } else if (
      garden &&
      latLngBounds &&
      !latLngBounds.contains(new google.maps.LatLng(garden.location))
    ) {
      setCenter(garden.location);
    }
  }, [activeGarden, currentLocation, gardens, latLngBounds]);

  const handleChildClick = (key: string) => {
    const number = Number(key);
    const index = gardens.findIndex((garden) => garden.number === number);

    setActiveGarden(number);

    if (desktopBreakpoint(windowWidth)) {
      gardenItems.current[number]?.scrollIntoView();
    } else if (-1 !== index) {
      navigation.current?.scrollTo({
        left: index * cardWidthFromWindowWidth(windowWidth),
      });
    }
  };

  const handleScroll = useDebouncedCallback(
    (event: SyntheticEvent<HTMLDivElement>) => {
      if (desktopBreakpoint(windowWidth)) {
        return;
      }

      const target = event.target as HTMLDivElement;
      const index = Math.round(
        target.scrollLeft / cardWidthFromWindowWidth(windowWidth)
      );
      const garden = gardens[index];

      if (garden) {
        setActiveGarden(garden.number);
      }
    },
    100
  );

  return (
    <div className={classes.root}>
      <div className={classes.map}>
        <GoogleMapReact
          {...mapProps}
          onChildClick={handleChildClick}
          center={center}
          options={mapOptions}
          onChange={({ marginBounds }) => setMarginBounds(marginBounds)}
          onGoogleApiLoaded={initializeBounds}
          margin={margin}
        >
          {currentLocation && (
            <GardenMarker
              {...currentLocation}
              key={CURRENT_LOCATION_NUMBER}
              current
            />
          )}
          {gardens.map((garden) => (
            <GardenMarker
              {...garden.location}
              key={garden.number}
              active={activeGarden === garden.number}
            />
          ))}
        </GoogleMapReact>
        <ParticipationFilterMenu
          value={participationFilter}
          onChange={setParticipationFilter}
        />
        <CurrentLocationButton
          onClick={clickCurrentLocation}
          active={!!currentLocation && CURRENT_LOCATION_NUMBER === activeGarden}
        />
      </div>
      <div
        className={classes.navigation}
        onScroll={handleScroll}
        ref={navigation}
      >
        <div className={classes.navigationHeading}>
          <h1 className="title">
            <Link href="/">{TITLE}</Link>
          </h1>
          <Dates />
        </div>
        <ul className={classes.gardenCards}>
          {gardens.map((garden) => (
            <li
              key={garden.number}
              ref={(li) => (gardenItems.current[garden.number] = li)}
            >
              <GardenCard
                garden={garden}
                active={activeGarden === garden.number}
                onClick={() => setActiveGarden(garden.number)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
