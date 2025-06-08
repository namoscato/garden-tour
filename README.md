# Ken-Ton Garden Tour

Ken-Ton Garden Tour event site built with [Next.js](https://nextjs.org/).

## Setup

1. Install [Corepack](https://yarnpkg.com/corepack):

   ```bash
   npm install -g corepack
   ```

1. Install dependencies:

   ```bash
   yarn install
   ```

1. Configure VSCode:

   1. Install [ZipFS](https://marketplace.visualstudio.com/items?itemName=arcanis.vscode-zipfs) extension
   1. Press `ctrl+shift+p` in a TypeScript file
   1. Choose "Select TypeScript Version"
   1. Pick "Use Workspace Version"

## Development

### Start Server

```
yarn run dev
```

### Upgrade Yarn

This project leverages Yarn's modern [Plug'n'Play](https://yarnpkg.com/features/pnp) installation strategy and includes a respective VSCode editor SDK in version control.

1. [Update Yarn](https://yarnpkg.com/getting-started/install#updating-yarn):

   ```bash
   yarn set version stable
   yarn install
   ```

1. Regenerate [VSCode Yarn PnP SDK](https://yarnpkg.com/getting-started/editor-sdks#vscode):

   ```bash
   yarn dlx @yarnpkg/sdks vscode
   ```
