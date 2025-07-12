import { GoogleSpreadsheetRow } from "google-spreadsheet";
import { Garden, PARTICIPATION_OPTIONS, SheetColumn } from "../types";

export function gardenFromRow(row: GoogleSpreadsheetRow): Garden {
  return {
    number: Number(row.get(SheetColumn.Number)),
    address: row.get(SheetColumn.Address),
    description: row.get(SheetColumn.Description),
    participation: PARTICIPATION_OPTIONS.filter(
      (option) => "FALSE" !== row.get(option),
    ),
    location: {
      lat: Number(row.get(SheetColumn.Lat)),
      lng: Number(row.get(SheetColumn.Lng)),
    },
  };
}
