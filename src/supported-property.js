import prefix from './prefix'
import camelize from './camelize'

let el
let cache = {}

if (typeof document != 'undefined') {
  el = document.createElement('p')

  /**
   * We test every property on vendor prefix requirement.
   * Once tested, result is cached. It gives us up to 70% perf boost.
   * http://jsperf.com/element-style-object-access-vs-plain-object
   *
   * Prefill cache with known css properties to reduce amount of
   * properties we need to feature test at runtime.
   * http://davidwalsh.name/vendor-prefix
   */
  let computed = window.getComputedStyle(document.documentElement, '')
  for (let key in computed) {
    cache[computed[key]] = computed[key]
  }
}

/**
 * Test if a property is supported, returns supported property with vendor
 * prefix if required. Returns `false` if not supported.
 *
 * @param {String} prop dash separated
 * @return {String|Boolean}
 * @api public
 */
export default function supportedProperty(prop) {
  if (!el) {
    cache[prop] = true
    return cache[prop]
  }

  // We have not tested this prop yet, lets do the test.
  if (cache[prop] != null) return cache[prop]

  // Camelization is required because we can't test using
  // css syntax for e.g. in FF.
  // Test if property is supported as it is.
  if (camelize(prop) in el.style) {
    cache[prop] = prop
  // Test if property is supported with vendor prefix.
  }
  else if ((prefix.js + camelize('-' + prop)) in el.style) {
    cache[prop] = prefix.css + prop
  }
  else {
    cache[prop] = false
  }

  return cache[prop]
}
