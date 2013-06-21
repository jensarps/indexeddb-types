/*
interface IDBCursor {
    readonly    attribute (IDBObjectStore or IDBIndex) source;
    readonly    attribute IDBCursorDirection           direction;
    readonly    attribute any                          key;
    readonly    attribute any                          primaryKey;
    IDBRequest update (any value);
    void       advance ([EnforceRange] unsigned long count);
    void       continue (optional any key);
    IDBRequest delete ();
};
*/

IDBCursor = function () {};

/**
 * @type {IDBObjectStore|IDBIndex}
 */
IDBCursor.prototype.source = null;

/**
 * @type {string}
 */
IDBCursor.prototype.direction = '';

/**
 * @type {*}
 */
IDBCursor.prototype.key = '';

/**
 * @type {*}
 */
IDBCursor.prototype.primaryKey = '';

/**
 * @param {*} value
 * @returns {IDBRequest}
 */
IDBCursor.prototype.update = function (value) {
  return new IDBRequest();
};

/**
 * @param {number} count
 * @returns {void}
 */
IDBCursor.prototype.advance = function (count) {};

/**
 * @param {*} [key]
 * @returns {void}
 */
IDBCursor.prototype.continue = function (key) {};

/**
 * @returns {IDBRequest}
 */
IDBCursor.prototype.delete = function () {
  return new IDBRequest();
};
