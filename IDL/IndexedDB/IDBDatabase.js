/*
interface IDBDatabase : EventTarget {
    readonly        attribute DOMString          name;
    readonly        attribute unsigned long long version;
    readonly        attribute DOMStringList      objectStoreNames;
    IDBObjectStore  createObjectStore (DOMString name, optional IDBObjectStoreParameters optionalParameters);
    void            deleteObjectStore (DOMString name);
    IDBTransaction  transaction ((DOMString or sequence<DOMString>) storeNames, optional IDBTransactionMode mode = "readonly");
    void            close ();
                    attribute EventHandler       onabort;
                    attribute EventHandler       onerror;
                    attribute EventHandler       onversionchange;
};
*/

IDBDatabase = function () {};
IDBDatabase.prototype = new EventTarget();

/**
 * @type {string}
 */
IDBDatabase.prototype.name = "";

/**
 * @type {number}
 */
IDBDatabase.prototype.version = 0;

/**
 * @type {DOMStringList}
 */
IDBDatabase.prototype.objectStoreNames = new DOMStringList();

/**
 * @param {string} name
 * @param {object} [optionalParameters]
 * @param {string|Array} [optionalParameters.keyPath=null]
 * @param {boolean} [optionalParameters.autoIncrement=false]
 * @returns {IDBObjectStore}
 */
IDBDatabase.prototype.createObjectStore = function (name, optionalParameters) {
  return new IDBObjectStore();
};

/**
 * @param name
 * @returns {void}
 */
IDBDatabase.prototype.deleteObjectStore = function (name) {};

/**
 * @param {string|Array} storeNames
 * @param {string} [mode='readonly']
 * @return {IDBTransaction}
 */
IDBDatabase.prototype.transaction = function (storeNames, mode) {
  return new IDBTransaction();
};

/**
 * @returns {void}
 */
IDBDatabase.prototype.close = function () {};

/**
 * @type {Function(Event)}
 */
IDBDatabase.prototype..onabort = null;

/**
 * @type {Function(Event)}
 */
IDBDatabase.prototype.onerror = null;

/**
 * @type {Function(Event)}
 */
IDBDatabase.prototype.onversionchange = null;
