# Local Flags

This tool helps you to manage feature flags locally in the browser. It use vanilla javascript to manage feature flags, so you can use it in any web application.

## Install

```bash
# Using npm
npm install @seobryn/local-flags

# Using pnpm
pnpm i @seobryn/local-flags
```

or if you want to add it through the CDN:
```js
import { setupLocalFlags } from "https://cdn.jsdelivr.net/npm/@seobryn/local-flags@latest/index.mjs"
import { setupLocalFlags } from "https://unpkg.com/@seobryn/local-flags@1.0.9/index.mjs"
```

## Usage

```js
// in your main js file
import { setupLocalFlags } from '@seobryn/local-flags';

setupLocalFlags(); // use this to setup local flags.

setupLocalFlags({
    calendarView: false
}); // use this to setup local flags with default values.

const localFlags = setupLocalFlags({
    calendarView: false
}, { useGloblal:false }) // use this setup if you want to expose localFlags Object in your JS code without using the global variable.
```

```js
// in your application or in the browser console
localFlags.enableFeature('calendarView'); // use this to enable a feature.
localFlags.disableFeature('calendarView'); // use this to disable a feature.
console.log(localFlags.featureList.toString()); // use this to get a list of all features in String format.
console.log(localFlags.featureList.toJSON()); // use this to get a list of all features in JSON format.
localFlags.isFeatureEnabled('calendarView'); // use this to check if a feature is enabled.
```

## Live example

Try out the live example [here](https://stackblitz.com/edit/local-flags-example)