/*
interface IDBRequest : EventTarget {
    readonly    attribute any                                        result;
    readonly    attribute DOMError                                   error;
    readonly    attribute (IDBObjectStore or IDBIndex or IDBCursor)? source;
    readonly    attribute IDBTransaction                             transaction;
    readonly    attribute IDBRequestReadyState                       readyState;
                attribute EventHandler                               onsuccess;
                attribute EventHandler                               onerror;
};
*/

IDBRequest = function(){};
IDBRequest.prototype = new EventTarget();

/**
 * @type {*}
 */
IDBRequest.prototype.result = null;

/**
 * @type {DOMError}
 */
IDBRequest.prototype.error = new DOMError();

/**
 * @type {IDBObjectStore|IDBIndex|IDBCursor}
 */
IDBRequest.prototype.source = null;

/**
 * @type {IDBTransaction}
 */
IDBRequest.prototype.transaction = new IDBTransaction();

/**
 * @type {String}
 */
IDBRequest.prototype.readyState = '';

/**
 * @type {function(Event)}
 */
IDBRequest.prototype.onsuccess = null;

/**
 * @type {function(Event)}
 */
IDBRequest.prototype.onerror = null;
