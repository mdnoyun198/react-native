# Practice2

Expo Router project configured with NativeWind v4 and Tailwind CSS.

## Requirements

- Node.js 22.13 or newer
- Expo SDK 57
- NativeWind 4

## Install

Install the NativeWind packages from the project root:

```bash
npm install nativewind react-native-reanimated react-native-safe-area-context
npm install --save-dev tailwindcss@^3.4.17 prettier-plugin-tailwindcss@^0.5.11
```

The required packages are already listed in `package.json` for this project.

## NativeWind Configuration

All configuration files below are created in the project root. In the paths
below, `/` means the root folder of this Expo project, not the operating system
root folder.

```text
/
├── babel.config.js          # NativeWind Babel preset
├── metro.config.js          # NativeWind Metro integration
├── tailwind.config.js       # Tailwind content paths and preset
├── nativewind-env.d.ts      # NativeWind TypeScript types
├── app.json
├── package.json
└── src/
	├── global.css            # Tailwind directives
	└── app/
		├── _layout.tsx       # Import global.css once here
		└── index.tsx         # Screens use className
```

Do not create `babel.config.js`, `metro.config.js`, `tailwind.config.js`, or
`nativewind-env.d.ts` inside `/src`.

### 1. `/tailwind.config.js`

Create `tailwind.config.js` in the project root. It must include every source
file that contains a `className`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	presets: [require("nativewind/preset")],
	theme: {
		extend: {},
	},
	plugins: [],
};
```

### 2. `/src/global.css`

Create `global.css` inside `/src` with the Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. `/babel.config.js`

Create `babel.config.js` in the project root. It must use the NativeWind JSX source:

```js
module.exports = function (api) {
	api.cache(true);
	return {
		presets: [
			["babel-preset-expo", { jsxImportSource: "nativewind" }],
			"nativewind/babel",
		],
	};
};
```

### 4. `/metro.config.js`

Create `metro.config.js` in the project root. The config file stays at the root,
but its `input` points to the stylesheet inside `/src`:

```js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "./src/global.css" });
```

### 5. `/nativewind-env.d.ts`

Create `nativewind-env.d.ts` in the project root. This is the NativeWind
TypeScript declaration file; it is not a file inside `/src`:

```ts
/// <reference types="nativewind/types" />
```

## Using NativeWind

Import the global stylesheet once in `/src/app/_layout.tsx`, before the router
renders its child screens:

```tsx
import "../global.css";
```

Do not import `global.css` again in every screen. A root layout import is enough
for all routes rendered below that layout. Screens such as `/src/app/index.tsx`
only need to use NativeWind classes:

```tsx
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";

export default function Home() {
	return (
		<SafeAreaView className="flex-1 items-center justify-center bg-red-700">
			<Text className="text-green-400">hello</Text>
		</SafeAreaView>
	);
}
```

Use literal class names in JSX so Tailwind can find them. Dynamically constructing
class names such as ``bg-${color}-500`` will not be detected unless the possible
classes are included explicitly in the Tailwind configuration.

## Run the App

```bash
npm start
```

For a specific platform:

```bash
npm run android
npm run ios
npm run web
```

The web bundler is configured to use Metro in `app.json`.

## Troubleshooting

After changing `tailwind.config.js`, `metro.config.js`, `babel.config.js`, or
`global.css`, restart Expo and clear the Metro cache:

```bash
npx expo start -c
```

If classes still do not work, check that:

1. The class is written directly in a file under `src`.
2. `src/global.css` is imported once from `/src/app/_layout.tsx` before the app renders.
3. Metro uses `./src/global.css` as its NativeWind input.
4. `tailwind.config.js` includes `./src/**/*.{js,jsx,ts,tsx}`.
5. The development server was restarted with `npx expo start -c`.

## Validation

Run the project checks with:

```bash
npm run lint
npx tsc --noEmit
```
