## Light And Dark Mode

Flint UI can make every screen support light and dark mode from one root design.

The important rule is simple: define theme tokens once, then use those tokens everywhere instead of hardcoded colors.

### 1. Define The Themes

Create a root design file for your app, for example `lib/ui/components/root_design.dart`.

```dart
import 'package:flint_dart/ui.dart';

const appLightTheme = FlintTheme(
  name: 'app-light',
  colors: {
    'bg': Color('#f8fafc'),
    'text': Color('#0f172a'),
    'muted': Color('#475569'),
    'panel': Color('#ffffff'),
    'panelStrong': Color('#f1f5f9'),
    'line': Color.rgba(148, 163, 184, 0.42),
    'primary': Color('#059669'),
    'accent': Color('#0284c7'),
  },
);

const appDarkTheme = FlintTheme(
  name: 'app-dark',
  colors: {
    'bg': Color('#05070d'),
    'text': Colors.white,
    'muted': Color('#a8b3c5'),
    'panel': Color('#0f172a'),
    'panelStrong': Color('#111827'),
    'line': Color.rgba(51, 65, 85, 0.82),
    'primary': Color('#34d399'),
    'accent': Color('#38bdf8'),
  },
);
```

Use names that describe purpose, not color. `panel`, `text`, and `line` are better than `blue1` or `darkGray`.

### 2. Register The Theme Provider

Attach the themes to `RootDesign`.

```dart
final appRootDesign = RootDesign(
  name: 'app-root',
  themeProvider: const FlintThemeProvider(
    light: appLightTheme,
    dark: appDarkTheme,
    initialMode: FlintThemeMode.dark,
  ),
  body: DartStyle(
    margin: const EdgeInsets.all(0),
    background: ThemeToken.color('bg'),
    color: ThemeToken.color('text'),
    fontFamily: FontFamily.systemSans,
  ),
  links: const DartStyle(
    color: Color('inherit'),
    textDecoration: TextDecorationStyle.none,
  ),
);
```

Then pass the root design when mounting Flint UI.

```dart
void main() {
  createFlintApp(
    '#app',
    registry: componentRegistry,
    rootDesign: appRootDesign,
  );
}
```

Now the whole app has a theme mode.

### 3. Use Theme Tokens In Every Screen

Every page, shared layout, card, sidebar, modal, form, and button should use `ThemeToken`.

```dart
Container(
  dartStyle: DartStyle(
    background: ThemeToken.color('panel'),
    color: ThemeToken.color('text'),
    border: Border.all(color: ThemeToken.color('line')),
  ),
  children: [
    Text.h2(
      'Settings',
      dartStyle: DartStyle(color: ThemeToken.color('text')),
    ),
    Text.p(
      'Manage your account preferences.',
      dartStyle: DartStyle(color: ThemeToken.color('muted')),
    ),
  ],
);
```

Avoid hardcoded page colors like this:

```dart
// Avoid this for theme-aware screens.
background: Color('#05070d'),
color: Colors.white,
```

Use tokens instead:

```dart
background: ThemeToken.color('bg'),
color: ThemeToken.color('text'),
```

### 4. Add A Global Toggle

Place the toggle in a shared component such as your nav bar or app shell.

```dart
StateSignalListener(flintTheme.mode, (mode) {
  final isDark = mode == FlintThemeMode.dark;
  final label = isDark ? 'Switch to light mode' : 'Switch to dark mode';

  return Button(
    props: {
      'aria-label': label,
      'title': label,
    },
    child: Icon(isDark ? Icons.sun : Icons.moon, size: 17),
    onPressed: (_) => flintTheme.toggle(),
  );
});
```

`flintTheme.toggle()` switches between light and dark mode. Flint UI stores the selected mode so the choice can survive reloads.

### 5. Use Light And Dark Overrides Only When Needed

Most styles should come from tokens. Use `light` and `dark` overrides when one mode needs special treatment.

```dart
Container(
  dartStyle: DartStyle(
    background: ThemeToken.color('panel'),
    border: Border.all(color: ThemeToken.color('line')),
    light: const DartStyle(
      shadow: Shadow(
        y: 12,
        blur: 32,
        spread: -24,
        color: Color.rgba(15, 23, 42, 0.22),
      ),
    ),
    dark: DartStyle(
      shadow: ThemeToken.shadow('glow'),
    ),
  ),
);
```

Good uses for mode overrides:

- shadows
- background gradients
- glass effects
- images or illustrations that need different contrast
- borders that are too strong in one mode

### 6. Make Shared Components Theme-Aware First

Start with shared components. Once these support theme tokens, most screens improve automatically.

Update these first:

- app shell
- nav bar
- sidebar
- footer
- page wrapper
- cards
- modals
- form fields
- tables
- empty states
- alerts

After that, update individual pages.

### 7. Screen Checklist

For every screen, check:

- the page background uses `ThemeToken.color('bg')`
- main text uses `ThemeToken.color('text')`
- secondary text uses `ThemeToken.color('muted')`
- cards and panels use `ThemeToken.color('panel')`
- borders use `ThemeToken.color('line')`
- primary actions use `ThemeToken.color('primary')`
- custom dark-only colors have a light-mode replacement
- hover and focus states work in both modes
- Markdown or HTML content has theme-aware styles

Also scan shared icons, small meta text, empty states, and form inputs. These are easy to miss because the main page can look correct while small details still use dark-only colors.

For a quick project audit, search for hardcoded dark UI colors in screen files and replace them with tokens:

```bash
rg "Colors.white|#cbd5e1|#94a3b8|rgba\\(15, 23, 42|rgba\\(2, 6, 23" lib/ui
```

Accent colors can stay hardcoded when they communicate state, brand, or selection. Neutral surfaces and text should usually use tokens.

### 8. Full Example

This example shows one complete screen using the same theme system throughout the page.

```dart
import 'package:flint_dart/ui.dart';

class AccountSettingsPage extends Component {
  final TextEditingController name = TextEditingController();
  final TextEditingController email = TextEditingController();

  @override
  View build() {
    return Container(
      dartStyle: DartStyle(
        minHeight: SizeValue.vh(100),
        background: ThemeToken.color('bg'),
        color: ThemeToken.color('text'),
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 40),
      ),
      children: [
        Container(
          dartStyle: DartStyle(
            display: Display.grid,
            gap: 18,
            width: SizeValue.percent(100),
            maxWidth: 760,
            margin: const EdgeInsets.symmetric(horizontal: SizeValue.auto),
          ),
          children: [
            _header(),
            _settingsPanel(),
          ],
        ),
      ],
    );
  }

  View _header() {
    return Row(
      dartStyle: DartStyle(
        display: Display.flex,
        flexWrap: FlexWrap.wrap,
        alignItems: AlignItems.center,
        justifyContent: JustifyContent.between,
        gap: 16,
      ),
      children: [
        Container(
          dartStyle: DartStyle(display: Display.grid, gap: 6),
          children: [
            Text.h1(
              'Account settings',
              dartStyle: DartStyle(
                margin: const EdgeInsets.all(0),
                color: ThemeToken.color('text'),
                fontSize: 32,
                fontWeight: 800,
              ),
            ),
            Text.p(
              'This page uses theme tokens from the outside shell down to each input.',
              dartStyle: DartStyle(
                margin: const EdgeInsets.all(0),
                color: ThemeToken.color('muted'),
                fontSize: 14,
              ),
            ),
          ],
        ),
        _themeToggle(),
      ],
    );
  }

  View _settingsPanel() {
    return Container(
      dartStyle: DartStyle(
        display: Display.grid,
        gap: 16,
        padding: const EdgeInsets.all(22),
        radius: 8,
        background: ThemeToken.color('panel'),
        border: Border.all(color: ThemeToken.color('line')),
        light: const DartStyle(
          shadow: Shadow(
            y: 14,
            blur: 36,
            spread: -26,
            color: Color.rgba(15, 23, 42, 0.18),
          ),
        ),
        dark: DartStyle(
          shadow: ThemeToken.shadow('glow'),
        ),
      ),
      children: [
        Text.h2(
          'Profile',
          dartStyle: DartStyle(
            margin: const EdgeInsets.all(0),
            color: ThemeToken.color('text'),
            fontSize: 18,
          ),
        ),
        TextField(
          label: 'Name',
          controller: name,
          inputDartStyle: _inputStyle,
        ),
        TextField(
          label: 'Email',
          type: 'email',
          controller: email,
          inputDartStyle: _inputStyle,
        ),
        Row(
          dartStyle: DartStyle(
            display: Display.flex,
            flexWrap: FlexWrap.wrap,
            gap: 10,
          ),
          children: [
            Button(
              child: 'Save changes',
              tone: Tone.primary,
              onPressed: (_) => toast.success('Settings saved'),
            ),
            Button(
              child: 'Cancel',
              variant: ButtonVariant.outline,
              tone: Tone.neutral,
              onPressed: (_) {},
            ),
          ],
        ),
      ],
    );
  }

  View _themeToggle() {
    return StateSignalListener(flintTheme.mode, (mode) {
      final isDark = mode == FlintThemeMode.dark;
      return Button(
        variant: ButtonVariant.outline,
        tone: Tone.neutral,
        props: {
          'aria-label': isDark ? 'Switch to light mode' : 'Switch to dark mode',
        },
        children: [
          Icon(isDark ? Icons.sun : Icons.moon, size: 16),
          Text.span(isDark ? 'Light mode' : 'Dark mode'),
        ],
        onPressed: (_) => flintTheme.toggle(),
      );
    });
  }
}

final _inputStyle = DartStyle(
  background: ThemeToken.color('panelStrong'),
  border: Border(color: ThemeToken.color('line'), width: 1),
  color: ThemeToken.color('text'),
);
```

### Best Practice

Do not theme one screen at a time with separate color variables. Theme the system.

Put all theme values in `FlintTheme`, wire them through `RootDesign`, then build every screen from `ThemeToken`. That gives the whole app light and dark mode without duplicating each page.
