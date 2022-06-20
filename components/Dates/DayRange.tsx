import { ParticipationOption } from "lib/gardensProvider/types";
import { PARTICIPATION_DATE } from "./constants";

interface Props {
  range: [ParticipationOption, ParticipationOption];
}

export default function DayRange({ range }: Props) {
  const [from, to] = range;

  return (
    <>
      {PARTICIPATION_DATE[from].day} – {PARTICIPATION_DATE[to].day}
    </>
  );
}
