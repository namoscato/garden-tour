import { Coords } from "google-map-react";

export enum SheetColumn {
  Number = "Map Number",
  Address = "Address",
  FormattedAddress = "Full Address",
  Lat = "Latitude",
  Lng = "Longitude",
  ParticipationFridayNight = "Friday Night",
  ParticipationSaturdayDay = "Saturday Day",
  ParticipationSaturdayNight = "Saturday Night",
  ParticipationSundayDay = "Sunday Day",
  Description = "Description",
}

export const PARTICIPATION_OPTIONS = [
  SheetColumn.ParticipationFridayNight,
  SheetColumn.ParticipationSaturdayDay,
  SheetColumn.ParticipationSaturdayNight,
  SheetColumn.ParticipationSundayDay,
] as const;

export type ParticipationOption = typeof PARTICIPATION_OPTIONS[number];

export interface Garden {
  number: number;
  address: string;
  description: string;
  participation: ParticipationOption[];
  location: Coords;
}
