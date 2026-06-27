---
name: upgrade-yarn
description: Upgrade the Yarn version in the garden-tour project and regenerate the committed VSCode PnP editor SDK. Use whenever the user asks to upgrade, update, or bump Yarn, set a new Yarn version, or refresh the Yarn PnP/editor SDK in this repo.
---

# Upgrade Yarn

This project uses Yarn 4 with the [Plug'n'Play](https://yarnpkg.com/features/pnp) installation strategy (no conventional `node_modules`) and commits a VSCode editor SDK to version control. Upgrading Yarn touches generated files that must be committed, so run the full sequence below rather than just bumping a version string.

## Steps

1. [Update Yarn](https://yarnpkg.com/getting-started/install#updating-yarn) to the latest stable release and reinstall so the PnP files regenerate:

   ```bash
   yarn set version stable
   yarn install
   ```

2. Regenerate the [VSCode Yarn PnP SDK](https://yarnpkg.com/getting-started/editor-sdks#vscode) so editor tooling stays in sync with the new Yarn version:

   ```bash
   yarn dlx @yarnpkg/sdks vscode
   ```

## After upgrading

`yarn set version` and `yarn install` rewrite the committed PnP artifacts (`.pnp.cjs`, `.pnp.loader.mjs`, `.yarn/`) and the `packageManager` field in `package.json`; regenerating the SDK updates `.yarn/sdks/`. These changes must be committed for other contributors and CI to use the same Yarn version. Confirm the working tree and offer to commit the result.
