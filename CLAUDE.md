# Cloudy Nights

## Overview
Browser games website at itsacloudynight.com. Two games: Cloudyman (Kaboom.js platformer) and Tommyman (DOM-based interactive sprite).

## Tech Stack
- **Runtime**: TypeScript (ESM), Webpack 5, Babel
- **Games**: Kaboom.js (Cloudyman), vanilla DOM (Tommyman)
- **Server**: Koa (dev server only)
- **Linting**: ESLint 10 via mikey-pro, Prettier, Stylelint
- **Deployment**: GitHub Pages from `client` branch (built by CI)

## Project Structure
```text
cloudyman/client/src/     # Cloudyman game source
tommyman/client/src/      # Tommyman game source
public/                   # Landing page (styles, assets, bundle)
docs/                     # HTML entry points + CNAME (deployed to client branch root)
.github/workflows/        # CI: build-prod.yml pushes to client branch
```

## Commands
- `npm run dev` — Webpack dev mode with watch
- `npm run prod` — Webpack production build
- `npm run fix` — ESLint autofix
- `npm run start` — Koa dev server on :3000

## Deployment
The `build-prod.yml` workflow:
1. Builds webpack bundles
2. Copies HTML from `docs/` to root
3. Prunes source files, keeps only production assets
4. Force-pushes to `client` branch

GitHub Pages serves from root of `client` branch.

## Conventions
- ESLint config extends mikey-pro with project overrides in `eslint.config.js`
- Prettier config from mikey-pro (`"prettier": "mikey-pro/prettier"`)
- Package is ESM (`"type": "module"`)
- No TypeScript type checking in build (babel-loader strips types)
