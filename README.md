# Local Flags

This tool helps you to manage feature flags locally in the browser. It use vanilla javascript to manage feature flags, so you can use it in any web application.

## Install

```bash
# Using npm
npm install @seobryn/local-flags

# Using pnpm
pnpm i @seobryn/local-flags
```

## Usage

```js
// in your main js file
import { setupLocalFlags } from '@seobryn/local-flags';

setupLocalFlags(); // use this to setup local flags.
setupLocalFlags({
    calendarView: false
}); // use this to setup local flags with default values.
```

```js
// in your application or in the browser console
enableFeature('calendarView'); // use this to enable a feature.
disableFeature('calendarView'); // use this to disable a feature.
featureList(); // use this to list all features.
isFeatureEnabled('calendarView'); // use this to check if a feature is enabled.
```