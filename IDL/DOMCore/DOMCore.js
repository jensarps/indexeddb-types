/*

 This file includes the parts of DOMCore used by IndexedDB's JSDoc.

 Include this if your IDE doesn't know about these.

*/

DOMError = function () {};

DOMStringList = function () {};

/**
 * @param {string} name
 * @returns {boolean}
 */
DOMStringList.prototype.contains = function (name) {
  return true;
};

/**
 * @type {number}
 */
DOMStringList.prototype.length = 0;

/**
 * @param {number} position
 * @returns {string}
 */
DOMStringList.prototype.item = function (position) {
  return '';
};
