import { GoogleSpreadsheet } from "google-spreadsheet";
import { gardenFromRow, geocodedRowsFromSheet } from "./functions";
import { Garden } from "./types";

export async function fetchGardens(): Promise<Garden[]> {
  const document = new GoogleSpreadsheet(process.env.GOOGLE_SHEETS_DOCUMENT_ID);

  await document.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL ?? "",
    private_key: (process.env.GOOGLE_SHEETS_PRIVATE_KEY ?? "").replace(
      /\\n/g,
      "\n"
    ),
  });

  await document.loadInfo();

  const rows = await geocodedRowsFromSheet(
    document.sheetsById[process.env.GOOGLE_SHEETS_SHEET_ID ?? ""]
  );

  return rows.map(gardenFromRow).sort((a, b) => a.number - b.number);
}
