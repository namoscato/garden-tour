import { JWT } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { gardenFromRow, geocodedRowsFromSheet } from "./functions";
import { Garden } from "./types";

export async function fetchGardens(): Promise<Garden[]> {
  const serviceAccountAuth = new JWT({
    email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    key: (process.env.GOOGLE_SHEETS_PRIVATE_KEY ?? "").replace(/\\n/g, "\n"),
    scopes: [
      "https://www.googleapis.com/auth/spreadsheets",
      "https://www.googleapis.com/auth/drive.file",
    ],
  });

  const document = new GoogleSpreadsheet(
    process.env.GOOGLE_SHEETS_DOCUMENT_ID ?? "",
    serviceAccountAuth,
  );

  await document.loadInfo();

  const rows = await geocodedRowsFromSheet(
    document.sheetsById[Number(process.env.GOOGLE_SHEETS_SHEET_ID ?? "")],
  );

  return rows.map(gardenFromRow).sort((a, b) => a.number - b.number);
}
