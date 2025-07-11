import { ParticipationOption, SheetColumn } from "lib/gardensProvider/types";
import { ParticipationDate } from "./types";

export const YEAR = 2025;

export const MONTH = "July";

export const TIME_NIGHT = "8:30pm – 11pm";

export const TIME_DAY = "10am – 4pm";

export const PARTICIPATION_DATE: Record<
  ParticipationOption,
  ParticipationDate
> = {
  [SheetColumn.ParticipationFridayNight]: {
    day: 18,
    time: TIME_NIGHT,
  },
  [SheetColumn.ParticipationSaturdayDay]: {
    day: 19,
    time: TIME_DAY,
  },
  [SheetColumn.ParticipationSaturdayNight]: {
    day: 19,
    time: TIME_NIGHT,
  },
  [SheetColumn.ParticipationSundayDay]: {
    day: 20,
    time: TIME_DAY,
  },
};
