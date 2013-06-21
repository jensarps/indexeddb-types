/*
[NoInterfaceObject]
interface IDBEnvironment {
    readonly    attribute IDBFactory indexedDB;
};
*/

/*
Object.defineProperty(window, "indexedDB", {
  enumerable: true,
  configurable: false,
  writable: false,
  get: function() { return new IDBFactory(); }
});
*/

window.indexedDB = new IDBFactory();
