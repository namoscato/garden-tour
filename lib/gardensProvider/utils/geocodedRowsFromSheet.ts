import { Client, GeocodeResult } from "@googlemaps/google-maps-services-js";
import {
  GoogleSpreadsheetRow,
  GoogleSpreadsheetWorksheet,
} from "google-spreadsheet";
import { SheetColumn } from "../types";

/** ordered postal code allow list, used for geocode filtering */
const POSTAL_CODES = [14217, 14223, 14150, 14207] as const satisfies number[];

export async function geocodedRowsFromSheet(
  sheet: GoogleSpreadsheetWorksheet,
): Promise<GoogleSpreadsheetRow[]> {
  const rows = await sheet.getRows();
  const mapsClient = new Client();

  for (const row of rows.filter((row) => !isRowGeocoded(row))) {
    try {
      const { formatted_address, geometry } = await geocodeAddress(
        mapsClient,
        row.get(SheetColumn.Address),
      );

      row.set(SheetColumn.FormattedAddress, formatted_address);
      row.set(SheetColumn.Lat, geometry.location.lat);
      row.set(SheetColumn.Lng, geometry.location.lng);

      await row.save();
    } catch (e) {
      console.warn(e);
    }
  }

  return rows.filter(isRowGeocoded);
}

function isRowGeocoded(row: GoogleSpreadsheetRow): boolean {
  return Boolean(row.get(SheetColumn.Lat) && row.get(SheetColumn.Lng));
}

async function geocodeAddress(
  client: Client,
  address: string,
  key = process.env.GOOGLE_MAPS_GEOCODING_API_KEY ?? "",
): Promise<GeocodeResult> {
  console.log("Geocoding address", { address });
  for (const postalCode of POSTAL_CODES) {
    console.log(`  - filtering in ${postalCode}`);
    const { data } = await client.geocode({
      params: {
        key,
        address,
        components: {
          country: "US",
          postal_code: String(postalCode),
        },
      },
    });

    for (const result of data.results) {
      if (!result.partial_match) {
        return result;
      }
    }
  }

  throw new Error(`Unable to geocode: ${address}`);
}
