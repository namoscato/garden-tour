import { SheetColumn } from "lib/gardensProvider/types";
import { MONTH, TIME_DAY, TIME_NIGHT } from "./constants";
import classes from "./Dates.module.scss";
import DayRange from "./DayRange";

export default function Dates() {
  return (
    <ul className={classes.root}>
      <li>
        <div className={classes.day}>
          {MONTH}{" "}
          <DayRange
            range={[
              SheetColumn.ParticipationFridayNight,
              SheetColumn.ParticipationSaturdayNight,
            ]}
          />
        </div>
        <div className={classes.time}>{TIME_NIGHT}</div>
      </li>
      <li>
        <div className={classes.day}>
          {MONTH}{" "}
          <DayRange
            range={[
              SheetColumn.ParticipationSaturdayDay,
              SheetColumn.ParticipationSundayDay,
            ]}
          />
        </div>
        <div className={classes.time}>{TIME_DAY}</div>
      </li>
    </ul>
  );
}
