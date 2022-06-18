import { Coords } from "google-map-react";

export enum SheetColumn {
  Number = "Map Number",
  Address = "Address",
  FormattedAddress = "Full Address",
  Lat = "Latitude",
  Lng = "Longitude",
  ParticipatingFridayNight = "Friday Night",
  ParticipatingSaturdayDay = "Saturday Day",
  ParticipatingSaturdayNight = "Saturday Night",
  ParticipatingSundayDay = "Sunday Day",
  Description = "Description",
}

export const PARTICIPATING_OPTIONS = [
  SheetColumn.ParticipatingFridayNight,
  SheetColumn.ParticipatingSaturdayDay,
  SheetColumn.ParticipatingSaturdayNight,
  SheetColumn.ParticipatingSundayDay,
] as const;

export type ParticipatingOption = typeof PARTICIPATING_OPTIONS[number];

export interface Garden {
  number: number;
  address: string;
  description: string;
  participating: ParticipatingOption[];
  location: Coords;
}
