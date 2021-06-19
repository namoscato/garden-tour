import GoogleMapReact, { Props as MapProps } from "google-map-react";
import { Garden } from "lib/gardensProvider/types";
import React, { useRef, useState } from "react";
import GardenItem from "./GardenItem";
import GardenMarker from "./GardenMarker";
import classes from "./Map.module.scss";

const MAP_PROPS: MapProps = {
  bootstrapURLKeys: {
    key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_JS_API_KEY,
  },
  defaultCenter: {
    lat: 42.9784587,
    lng: -78.8669686,
  },
  defaultZoom: 13,
};

interface Props {
  gardens: Garden[];
}

export default function Map({ gardens }: Props) {
  const gardenItems = useRef({});

  const [activeGarden, setActiveGarden] = useState<number>();
  const handleChildClick = (number: string) => {
    setActiveGarden(Number(number));
    gardenItems.current[number]?.scrollIntoView();
  };

  return (
    <div className={classes.root}>
      <div className={classes.map}>
        <GoogleMapReact {...MAP_PROPS} onChildClick={handleChildClick}>
          {gardens.map((garden) => (
            <GardenMarker
              {...garden.location}
              key={garden.number}
              active={activeGarden === garden.number}
            />
          ))}
        </GoogleMapReact>
      </div>
      <div className={classes.sidebar}>
        <ul className={classes.sidebarGardens}>
          {gardens.map((garden) => (
            <li
              key={garden.number}
              ref={(li) => (gardenItems.current[garden.number] = li)}
            >
              <GardenItem
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
