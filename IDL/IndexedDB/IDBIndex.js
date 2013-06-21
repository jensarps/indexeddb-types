/*
interface IDBIndex {
    readonly    attribute DOMString      name;
    readonly    attribute IDBObjectStore objectStore;
    readonly    attribute any            keyPath;
    readonly    attribute boolean        multiEntry;
    readonly    attribute boolean        unique;
    IDBRequest openCursor (optional any? range, optional IDBCursorDirection direction = "next");
    IDBRequest openKeyCursor (optional any? range, optional IDBCursorDirection direction = "next");
    IDBRequest get (any key);
    IDBRequest getKey (any key);
    IDBRequest count (optional any key);
};
*/

IDBIndex = function () {};

/**
 * @type {string}
 */
IDBIndex.prototype.name = '';

/**
 * @type {IDBObjectStore}
 */
IDBIndex.prototype.objectStore = new IDBObjectStore();

/**
 * @type {*}
 */
IDBIndex.prototype.keyPath = null;

/**
 * @type {boolean}
 */
IDBIndex.prototype.multiEntry = false;

/**
 * @type {boolean}
 */
IDBIndex.prototype.unique = false;

/**
 * @param {*} [range]
 * @param {string} [direction='next']
 * @returns {IDBRequest}
 */
IDBIndex.prototype.openCursor = function (range, direction) {
  return new IDBRequest();
};

/**
 * @param {*} [range]
 * @param {string} [direction='next']
 * @returns {IDBRequest}
 */
IDBIndex.prototype.openKeyCursor = function (range, direction) {
  return new IDBRequest();
};

/**
 * @param {*} key
 * @returns {IDBRequest}
 */
IDBIndex.prototype.get = function (key) {
  return new IDBRequest();
};

/**
 * @param {*} key
 * @returns {IDBRequest}
 */
IDBIndex.prototype.getKey = function (key) {
  return new IDBRequest();
};

/**
 * @param {*} key
 * @returns {IDBRequest}
 */
IDBIndex.prototype.count = function (key) {
  return new IDBRequest();
};
