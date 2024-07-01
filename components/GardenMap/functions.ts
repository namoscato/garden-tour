import { MapOptions, Props } from "google-map-react";
import { ParticipationOption, SheetColumn } from "lib/gardensProvider/types";
import { BREAKPOINT_DESKTOP, MAP_OPTIONS } from "./constants";

export function cardWidthFromWindowWidth(windowWidth: number): number {
  return 0.9 * windowWidth;
}

export function desktopBreakpoint(windowWidth: number): boolean {
  return windowWidth >= BREAKPOINT_DESKTOP;
}

export function mapPropsFromWindowWidth(windowWidth: number): Props {
  let lat = 42.9665;

  if (desktopBreakpoint(windowWidth)) {
    lat += 0.015;
  }

  return {
    bootstrapURLKeys: {
      key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_JS_API_KEY ?? "",
    },
    defaultZoom: 13,
    defaultCenter: {
      lat,
      lng: -78.8669686,
    },
  };
}

export function mapOptionsFromWindowWidth(windowWidth: number): MapOptions {
  if (desktopBreakpoint(windowWidth)) {
    return MAP_OPTIONS;
  }

  return {
    ...MAP_OPTIONS,
    zoomControl: false,
  };
}

export function labelFromParticipationOption(
  option: ParticipationOption,
): string {
  switch (option) {
    case SheetColumn.ParticipationFridayNight:
      return "Friday Night";
    case SheetColumn.ParticipationSaturdayDay:
      return "Saturday";
    case SheetColumn.ParticipationSaturdayNight:
      return "Saturday Night";
    case SheetColumn.ParticipationSundayDay:
      return "Sunday";
    default:
      return assertNever(option);
  }
}

function assertNever(option: never): never {
  throw new Error(`Unexpected option ${option}`);
}
