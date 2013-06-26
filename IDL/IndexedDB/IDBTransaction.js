/*
interface IDBTransaction : EventTarget {
    readonly        attribute IDBTransactionMode mode;
    readonly        attribute IDBDatabase        db;
    readonly        attribute DOMError           error;
    IDBObjectStore  objectStore (DOMString name);
    void            abort ();
                    attribute EventHandler       onabort;
                    attribute EventHandler       oncomplete;
                    attribute EventHandler       onerror;
};
*/

IDBTransaction = function () {};
IDBTransaction.prototype = new EventTarget();

/**
 * @type {string}
 */
IDBTransaction.prototype.mode = '';

/**
 * @type {IDBDatabase}
 */
IDBTransaction.prototype.db = new IDBDatabase();

/**
 * @type {DOMError}
 */
IDBTransaction.prototype.error = new DOMError();

/**
 * @param {string} name
 * @returns {IDBObjectStore}
 */
IDBTransaction.prototype.objectStore = function (name) {
  return new IDBObjectStore();
};

/**
 * @returns {void}
 */
IDBTransaction.prototype.abort = function () {};

/**
 * @type {Function(Event)}
 */
IDBTransaction.prototype.abort.onabort = null;

/**
 * @type {Function(Event)}
 */
IDBTransaction.prototype.oncomplete = null;

/**
 * @type {Function(Event)}
 */
IDBTransaction.prototype.onerror = null;
