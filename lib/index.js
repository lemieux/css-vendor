/**
 * CSS Vendor prefix detection and property feature testing.
 *
 * @copyright Oleg Slobodskoi 2015
 * @website https://github.com/jsstyles/css-vendor
 * @license MIT
 */

'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _prefix = require('./prefix');

var _prefix2 = _interopRequireDefault(_prefix);

var _supportedProperty = require('./supported-property');

var _supportedProperty2 = _interopRequireDefault(_supportedProperty);

var _supportedValue = require('./supported-value');

var _supportedValue2 = _interopRequireDefault(_supportedValue);

exports['default'] = {
  prefix: _prefix2['default'],
  supportedProperty: _supportedProperty2['default'],
  supportedValue: _supportedValue2['default']
};
exports.prefix = _prefix2['default'];
exports.supportedProperty = _supportedProperty2['default'];
exports.supportedValue = _supportedValue2['default'];