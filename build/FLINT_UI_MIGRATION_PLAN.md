# Flint Docs Flint UI Migration Plan

This plan moves Flint Docs from server-rendered `.flint.html` views toward Flint UI pages while keeping the current docs site stable. The goal is not to rewrite everything at once. The first visible milestone is a small interactive counter section inside the existing app so visitors can see Flint UI reacting in the browser.

## Goal

- Use `flint_ui` for new docs UI work.
- Keep existing Flint template pages working during migration.
- Add a live interactive counter section as the first browser UI proof.
- Use `flint_client` from browser components when a UI section needs API data.
- Move page by page from `.flint.html` templates to typed Flint UI components.

## Current State

- The docs app is a Flint Dart server app.
- Pages are mostly rendered from `lib/views/**/*.flint.html`.
- Routes live mainly in `lib/routes/web_routes.dart`.
- Static assets are served from `public/assets`.
- `flint_dart` is on `^1.1.0`.
- `flint_ui` is now a direct docs dependency.

## Target Shape

Use Flint Dart for the backend and page payloads, and Flint UI for browser-rendered docs surfaces.

```text
lib/
  routes/
    web_routes.dart
  ui/
    main.dart
    component_registry.dart
    pages/
      home_page.dart
      guides_page.dart
      api_page.dart
    components/
      docs_shell.dart
      counter_demo.dart
      code_block.dart
      doc_nav.dart
```

The exact folder can be adjusted, but we should keep all browser UI entrypoints together so the Flint CLI can build them cleanly.

## Phase 1: Add Flint UI To The Docs App

- Add `flint_ui: ^0.1.4` as a direct dependency.
- Keep `flint_dart: ^1.1.0`.
- Run `dart pub get`.
- Confirm `dart analyze` still passes.
- Do not remove `.flint.html` pages yet.

## Phase 2: Create A Small Interactive Counter Section

Create a Flint UI component named `CounterDemo`.

Purpose:

- Prove browser interactivity.
- Show that Flint UI can live beside current template-rendered docs.
- Give the first page a small interactive section without replacing the whole homepage.

Expected behavior:

- Render a title, count value, increment button, decrement button, and reset button.
- Keep state in the browser with a `FlintComponent`.
- Style it with Flint UI layout/action widgets, not raw template HTML.

Placement:

- Add it as a section on the first page/home docs experience.
- The homepage can stay mostly template-rendered at first.
- The live section can be mounted into a dedicated element, for example:

```html
<div id="flint-counter-demo"></div>
```

Then the Flint UI browser entrypoint mounts only that section while the rest of the page remains server-rendered.

Status: completed.

Implementation notes:

- Moved the app-owned Flint UI browser source to `lib/ui`.
- Added a Flint UI browser entrypoint at `lib/ui/main.dart`.
- Added `CounterDemo` as a local browser-state component.
- Added a homepage mount point with `id="flint-counter-demo"`.
- Added the counter bundle script to the shared layout.
- Compiled the browser bundle into `public/assets/js/flint-ui/main.dart.js`.
- Updated the counter demo to use `DartStyle` instead of CSS classes.
- `dart analyze` passes after this pass.

Cross-app reuse:

- Added the same demo to EuPanel as an internal dashboard proof.
- Added the same demo to `flint_portfolio` as a portfolio proof section.
- Do not add custom CSS files or Tailwind-only class styling for these demos.
- Prefer Flint UI widgets plus `DartStyle`, theme tokens, and typed style values.
- Recompiled the docs, EuPanel, and portfolio browser bundles.
- `dart analyze` passes in all three app workspaces.

## Phase 3: Add The Browser Entrypoint

Create a browser UI entrypoint with the Flint CLI or by matching the Flint UI example structure:

```text
lib/ui/main.dart
lib/ui/component_registry.dart
lib/ui/components/counter_demo.dart
```

Build output should go to a public folder that the docs app can serve:

```text
public/assets/js/flint-ui/main.dart.js
```

The layout template should load the built script only when needed, or globally once the Flint UI runtime is stable.

## Phase 4: Connect Flint Client

Use `flint_client` when interactive sections need server data.

Good first API-backed examples:

- Fetch current framework version.
- Fetch recent changelog entries.
- Fetch guide search results.
- Submit lightweight feedback from docs pages.

Counter should start as local browser state. After that, add one `flint_client` example so the docs show both local state and API calls.

## Phase 5: Convert New Docs Pages To Flint UI First

New pages should be written in Flint UI instead of `.flint.html`.

Recommended first pages:

- `/client`
- `/examples`
- A new `/ui` or `/flint-ui` guide page

Reason:

- They are lower risk than the homepage and blog/Q&A pages.
- They can demonstrate the new UI architecture without disturbing SEO-heavy routes.

## Phase 6: Convert Existing Template Pages Gradually

Move templates in this order:

1. Small static pages: `whats-new`, `changelog`, `examples`.
2. Guide pages: `guides/*`.
3. API reference pages: `api/*`.
4. Homepage.
5. Blog and questions pages.

For each page:

- Keep the route URL unchanged.
- Move repeated HTML into Flint UI components.
- Preserve title, description, canonical URL, and structured metadata.
- Add or update tests for response payloads and page data.
- Keep template fallback until the Flint UI page is verified.

## Phase 7: Shared Docs Components

Create shared components as they appear naturally:

- `DocsShell`
- `DocsTopbar`
- `DocsSidebar`
- `GuideLayout`
- `ApiLayout`
- `CodeBlock`
- `Callout`
- `InstallCommand`
- `CounterDemo`
- `SearchBox`

Avoid building a giant design system first. Extract components when two or more pages need the same structure.

## Phase 8: Validation Checklist

Run this after each migration slice:

```bash
dart format lib test
dart analyze
dart test
```

For browser UI changes:

```bash
flint web-ui build
```

Then manually verify:

- Homepage still loads.
- Counter buttons update without page refresh.
- Existing docs routes still render.
- CSS and JS assets are served from `public`.
- SEO metadata is preserved for migrated pages.

## First Implementation Slice

1. Add `flint_ui` dependency.
2. Add a Flint UI browser entrypoint.
3. Add `CounterDemo`.
4. Mount the counter into a small homepage section.
5. Build browser assets into `public/assets/js/flint-ui`.
6. Keep all other homepage content in `home.flint.html`.

This gives us the smallest useful migration: one interactive island inside the existing docs site.
