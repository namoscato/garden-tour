import { ChildComponentProps } from "google-map-react";
import { Garden } from "lib/gardensProvider/types";
import React from "react";
import classes from "./GardenMarker.module.scss";
import cn from "classnames";

interface Props extends ChildComponentProps {
  active: boolean;
}

export default function GardenMarker({ active }: Props) {
  return <div className={cn(classes.root, { [classes.active]: active })} />;
}
