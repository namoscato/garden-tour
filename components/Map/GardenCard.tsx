import { Garden } from "lib/gardensProvider/types";
import React from "react";
import classes from "./GardenCard.module.scss";
import cn from "classnames";
import { labelFromParticipatingOption } from "./functions";

interface Props {
  garden: Garden;
  active: boolean;
  onClick: () => void;
}

export default function GardenCard({ garden, active, onClick }: Props) {
  return (
    <div
      className={cn(classes.root, { [classes.active]: active })}
      onClick={onClick}
    >
      <h1 className={classes.title}>
        <span className={classes.titleNumber}>{garden.number}</span>
        <span>{garden.address}</span>
      </h1>
      <p>{garden.description}</p>
      <ul className={classes.participating}>
        {garden.participating.map((option) => (
          <li key={option}>{labelFromParticipatingOption(option)}</li>
        ))}
      </ul>
    </div>
  );
}
