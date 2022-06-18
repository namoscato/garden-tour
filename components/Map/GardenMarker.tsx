import cn from "classnames";
import { ChildComponentProps } from "google-map-react";
import classes from "./GardenMarker.module.scss";

interface Props extends ChildComponentProps {
  active?: boolean;
  current?: boolean;
}

export default function GardenMarker({ active, current }: Props) {
  return (
    <div
      className={cn(classes.root, {
        [classes.active]: active,
        [classes.current]: current,
      })}
    />
  );
}
