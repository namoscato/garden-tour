import { PARTICIPATION_DATE } from "components/Dates/constants";
import {
  ParticipationOption,
  PARTICIPATION_OPTIONS,
} from "lib/gardensProvider/types";
import { uniq } from "lodash";
import { useMemo } from "react";
import { labelFromDays } from "./functions";

const FULL_DAYS = PARTICIPATION_OPTIONS.map<number>(
  (participation) => PARTICIPATION_DATE[participation].day
);

export function useDayLabel(
  participationFilter: Map<ParticipationOption, boolean>
): string {
  return useMemo<string>(() => {
    const days = uniq(
      PARTICIPATION_OPTIONS.filter((participation) =>
        participationFilter.get(participation)
      ).map<number>((participation) => PARTICIPATION_DATE[participation].day)
    );

    return labelFromDays(0 === days.length ? FULL_DAYS : days);
  }, [participationFilter]);
}
