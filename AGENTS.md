# AGENTS.md

This file provides guidance to coding agents when working with code in this repository.

## Overview

Event site for the **Ken-Ton Garden Tour**, an annual garden tour in the Village of Kenmore and Town of Tonawanda. Built with Next.js (Pages Router), TypeScript, and SCSS modules.

## Commands

```bash
yarn dev          # start the dev server
yarn build        # production build
yarn lint         # next lint + tsc (type check) + stylelint on **/*.scss
yarn prettier     # check formatting; prettier:fix to write
yarn test         # CI gate: runs lint + prettier (no unit test suite)
```

There is no unit/integration test framework — `yarn test` only lints and checks formatting. CI (`.github/workflows/ci.yml`) runs `yarn install --immutable && yarn test`.

## Toolchain

- **Node**: version pinned in `.nvmrc` (24).
- **Yarn 4 with Plug'n'Play** (no conventional `node_modules`). `.pnp.cjs`, `.pnp.loader.mjs`, and `.yarn/` are committed. After adding deps, the PnP files change — commit them. VSCode needs the ZipFS extension and "Use Workspace Version" for TypeScript (see README).
- Upgrade Yarn with `yarn set version stable && yarn install`, then regenerate the editor SDK: `yarn dlx @yarnpkg/sdks vscode`.

## Architecture

**Garden data pipeline** (`lib/gardensProvider/`) — the core domain logic. A Google Sheet is the source of truth for gardens:

1. `fetchGardens.ts` authenticates to Google Sheets with a JWT service account and loads the configured worksheet.
2. `geocodedRowsFromSheet.ts` geocodes any rows missing lat/lng via the Google Maps Geocoding API, **writes the results back to the sheet**, and returns only rows that have coordinates. Geocoding filters against an ordered allow-list of local postal codes (`POSTAL_CODES`) and rejects partial matches.
3. `gardenFromRow.ts` maps a spreadsheet row to a `Garden`. Sheet column names are centralized in the `SheetColumn` enum in `types.ts` — change column headers there, not inline.

Participation days/times live in `components/Dates/constants.ts` (`YEAR`, `MONTH`, `PARTICIPATION_DATE`) keyed by the same `SheetColumn` participation values. **Update these constants each event year.**

**Pages** (`pages/`, Pages Router): `index` (home), `guide` (the interactive map), `about`, `register/` (Typeform-embedded application + rules). `_app.tsx` sets up global SEO (`next-seo`), the Nunito font, and fires Google Analytics page views on route changes via `lib/gtag.ts`.

**Components**: `GardenMap/` is the most involved — `google-map-react` map with garden markers, a current-location button (`react-geolocated`), garden cards, and a `ParticipationFilterMenu` for filtering gardens by day/session. Co-located `hooks.ts`/`functions.ts`/`constants.ts` hold its logic.

## Conventions

- **SCSS modules** (`*.module.scss`) co-located with components; shared tokens in `styles/_variables.scss`, globals in `styles/globals.scss`. Stylelint enforces `stylelint-config-sass-guidelines`.
- Path imports are **baseUrl-relative** (`components/...`, `lib/...`, `hooks/...`), not aliased — see `tsconfig.json` (`baseUrl: "."`).
- TypeScript is `strict`.
- Client-exposed environment variables are prefixed `NEXT_PUBLIC_*`; all others are server-only (Google Sheets and Maps credentials).
