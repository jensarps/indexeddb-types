/*
interface IDBFactory {
    IDBOpenDBRequest open (DOMString name, [EnforceRange] optional unsigned long long version);
    IDBOpenDBRequest deleteDatabase (DOMString name);
    short            cmp (any first, any second);
};
*/

IDBFactory = function () {};

/**
 * @param {string} name
 * @param {number} [version]
 * @returns {IDBOpenDBRequest}
 */
IDBFactory.prototype.open = function (name, version) {
  return new IDBOpenDBRequest();
};

/**
 * @param {string} name
 * @returns {IDBOpenDBRequest}
 */
IDBFactory.prototype.deleteDatabase = function (name) {
  return new IDBOpenDBRequest();
};

/**
 * @param {*} first
 * @param {*} second
 * @returns {number}
 */
IDBFactory.prototype.cmp = function (first, second) {
  return 0;
};
