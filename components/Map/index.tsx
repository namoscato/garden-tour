import { useWindowWidth } from "@react-hook/window-size";
import Dates from "components/Dates";
import GoogleMapReact, { Bounds, Coords } from "google-map-react";
import { Garden } from "lib/gardensProvider/types";
import Link from "next/link";
import { TITLE } from "pages/_app";
import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import {
  cardWidthFromWindowWidth,
  desktopBreakpoint,
  mapOptionsFromWindowWidth,
  mapPropsFromWindowWidth,
} from "./functions";
import GardenCard from "./GardenCard";
import GardenMarker from "./GardenMarker";
import classes from "./Map.module.scss";

interface Props {
  gardens: Garden[];
}

export default function Map({ gardens }: Props) {
  const navigation = useRef<HTMLDivElement | null>(null);
  const gardenItems = useRef<Record<number, HTMLLIElement | null>>({});

  const windowWidth = useWindowWidth();
  const [mapProps] = useState(mapPropsFromWindowWidth(windowWidth));
  const [mapOptions] = useState(mapOptionsFromWindowWidth(windowWidth));
  const [center, setCenter] = useState<Coords | undefined>(
    mapProps.defaultCenter
  );

  const [bounds, setBounds] = useState<Bounds>();
  const [latLngBounds, setLatLngBounds] = useState<google.maps.LatLngBounds>();
  const initializeBounds = () => {
    if (bounds && undefined !== window.google) {
      setLatLngBounds(
        new google.maps.LatLngBounds(
          new google.maps.LatLng(bounds.sw),
          new google.maps.LatLng(bounds.ne)
        )
      );
    }
  };
  useEffect(initializeBounds, [bounds]);

  const [activeGarden, setActiveGarden] = useState<number | undefined>(() => {
    return desktopBreakpoint(windowWidth) ? undefined : gardens[0]?.number;
  });
  useEffect(() => {
    const garden = gardens.find((garden) => garden.number === activeGarden);

    if (
      garden &&
      latLngBounds &&
      !latLngBounds.contains(new google.maps.LatLng(garden.location))
    ) {
      setCenter(garden.location);
    }
  }, [activeGarden]);

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
          onChange={({ bounds }) => setBounds(bounds)}
          onGoogleApiLoaded={initializeBounds}
        >
          {gardens.map((garden) => (
            <GardenMarker
              {...garden.location}
              key={garden.number}
              active={activeGarden === garden.number}
            />
          ))}
        </GoogleMapReact>
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
