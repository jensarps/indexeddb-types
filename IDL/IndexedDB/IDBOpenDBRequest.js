/*
interface IDBOpenDBRequest : IDBRequest {
                attribute EventHandler onblocked;
                attribute EventHandler onupgradeneeded;
};
*/

IDBOpenDBRequest = function () {};
IDBOpenDBRequest.prototype = new IDBRequest();

/**
 * @type {Function(Event)}
 */
IDBOpenDBRequest.prototype.onblocked = null;

/**
 * @type {Function(Event)}
 */
IDBOpenDBRequest.prototype.onupgradeneeded = null;
