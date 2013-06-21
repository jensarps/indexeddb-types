/*
interface IDBKeyRange {
    readonly    attribute any     lower;
    readonly    attribute any     upper;
    readonly    attribute boolean lowerOpen;
    readonly    attribute boolean upperOpen;
    static IDBKeyRange only (any value);
    static IDBKeyRange lowerBound (any lower, optional boolean open);
    static IDBKeyRange upperBound (any upper, optional boolean open);
    static IDBKeyRange bound (any lower, any upper, optional boolean lowerOpen, optional boolean upperOpen);
};
*/

(function(){

  IDBKeyRange = function () {};

  /**
   * @type {*}
   */
  IDBKeyRange.prototype.lower = null;

  /**
   * @type {*}
   */
  IDBKeyRange.prototype.upper = null;

  /**
   * @type {boolean}
   */
  IDBKeyRange.prototype.lowerOpen = false;

  /**
   * @type {boolean}
   */
  IDBKeyRange.prototype.upperOpen = false;

  /**
   * @param {*} value
   * @returns {IDBKeyRange}
   */
  IDBKeyRange.prototype.only = function (value) {
    return new IDBKeyRange();
  };

  /**
   * @param {*} lower
   * @param {boolean} [open]
   * @returns {IDBKeyRange}
   */
  IDBKeyRange.prototype.lowerBound = function (lower, open) {
    return new IDBKeyRange();
  };

  /**
   * @param {*} upper
   * @param {boolean} [open]
   * @returns {IDBKeyRange}
   */
  IDBKeyRange.prototype.upperBound = function (upper, open) {
    return new IDBKeyRange();
  };

  /**
   * @param {*} lower
   * @param {*} upper
   * @param {boolean} [lowerOpen]
   * @param {boolean} [upperOpen]
   * @returns {IDBKeyRange}
   */
  IDBKeyRange.prototype.bound = function (lower, upper, lowerOpen, upperOpen) {
    return new IDBKeyRange();
  };

  window.IDBKeyRange = new IDBKeyRange();

})();
