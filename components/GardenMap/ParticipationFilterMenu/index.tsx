import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import cn from "classnames";
import { MONTH, PARTICIPATION_DATE, YEAR } from "components/Dates/constants";
import {
  ParticipationOption,
  PARTICIPATION_OPTIONS,
} from "lib/gardensProvider/types";
import { sendEvent } from "lib/gtag";
import { labelFromParticipationOption } from "../functions";
import { useDayLabel } from "./hooks";
import classes from "./ParticipationFilterMenu.module.scss";

interface Props {
  value: Map<ParticipationOption, boolean>;
  onChange: (value: Map<ParticipationOption, boolean>) => void;
}

export default function ParticipationFilterMenu({ value, onChange }: Props) {
  const dayLabel = useDayLabel(value);

  return (
    <div className={classes.root}>
      <Menu
        menuButton={({ open }) => (
          <MenuButton className={classes.button}>
            {MONTH} {dayLabel}, {YEAR}{" "}
            <span
              className={cn(classes.buttonCaret, {
                [classes.buttonCaretOpen]: open,
              })}
            />
          </MenuButton>
        )}
      >
        {PARTICIPATION_OPTIONS.map((option) => (
          <MenuItem
            key={option}
            type="checkbox"
            className={classes.menuItem}
            checked={value.get(option)}
            onClick={(event) => {
              onChange(
                new Map([
                  ...Array.from(value.entries()),
                  [option, Boolean(event.checked)],
                ]),
              );

              if (event.checked) {
                sendEvent("filter", "guide", option);
              }
            }}
          >
            {labelFromParticipationOption(option)}
            <span className={classes.menuItemSubtitle}>
              {MONTH} {PARTICIPATION_DATE[option].day},{" "}
              {PARTICIPATION_DATE[option].time}
            </span>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
