/**
 * This method is used to setup local flags, it will be called by the main js file.
 * You can set default values for some features here.
 * Example:
 *        ```setupLocalFlags({
 *          calendarView: false
 *        })```
 * @param {{[key: string]: boolean}} params
 */

const { localStorage } = window

export function setupLocalFlags (params) {
  if (typeof window === 'undefined') {
    throw new Error('Local flags can only be used in the browser')
  }
  if ('enableFeature' in window) {
    console.warn('Local flags is already setup')
    return
  }

  Object.defineProperty(window, 'enableFeature', {
    value: enableFeature,
    writable: false
  })

  Object.defineProperty(window, 'disableFeature', {
    value: disableFeature,
    writable: false
  })

  Object.defineProperty(window, 'featureList', {
    value: featureList,
    writable: false
  })

  Object.defineProperty(window, 'isFeatureEnabled', {
    value: isFeatureEnabled,
    writable: false
  })

  for (const key in params) {
    const value = localStorage.getItem(`feature.${key}`)
    if (value === null) {
      localStorage.setItem(`feature.${key}`, String(params[key] === true))
    } else {
      console.log(`Feature [${key}] has been set to [${value === 'true' ? 'ON' : 'OFF'}]`)
    }
  }
}

/**
 * This method enables a feature
 * @param {string} feature - Feature Name
 */
function enableFeature (feature) {
  localStorage.setItem(`feature.${feature}`, 'true')
  return true
}

/**
 * This method disables a feature
 * @param {string} feature - Feature Name
 */
function disableFeature (feature) {
  localStorage.setItem(`feature.${feature}`, 'false')
  return true
}

/**
 * This method checks if a feature is enabled
 * @param {string} feature - Feature that you want to check
 * @return {boolean} - true if the feature is enabled
 */
function isFeatureEnabled (feature) {
  const value = localStorage.getItem(`feature.${feature}`)
  return value === 'true'
}

/**
 * This method prints a list of features
 */
function featureList () {
  const keys = Object.keys(localStorage)

  if (keys.length === 0) {
    console.log('No feature found')
    return
  }
  const list = keys
    .filter(key => key.startsWith('feature.'))
    .map(key => {
      const value = localStorage.getItem(key) === 'true'
      return key.replace('feature.', '\t- ') + ': ' + (value ? 'ON' : 'OFF')
    })
    .join('\n')
  console.log(`Feature List:\n${list}`)
}
