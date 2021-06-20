import { useWindowWidth } from "@react-hook/window-size";
import GoogleMapReact, { Coords } from "google-map-react";
import { Garden } from "lib/gardensProvider/types";
import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { DEFAULT_CENTER, DEFAULT_ZOOM } from "./constants";
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
  const [center, setCenter] = useState<Coords>(DEFAULT_CENTER);
  const [zoom, setZoom] = useState<number>(DEFAULT_ZOOM);

  const [activeGarden, setActiveGarden] = useState<number | undefined>(() => {
    console.log("windowWidth", windowWidth);
    return desktopBreakpoint(windowWidth) ? undefined : gardens[0]?.number;
  });
  useEffect(() => {
    console.log("activeGarden", activeGarden);
    const garden = gardens.find((garden) => garden.number === activeGarden);

    if (garden) {
      // setCenter(garden.location);
      // setZoom(14);
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
          // center={center}
          // zoom={zoom}
          options={mapOptions}
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
