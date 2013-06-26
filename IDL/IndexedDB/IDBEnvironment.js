/*
[NoInterfaceObject]
interface IDBEnvironment {
    readonly    attribute IDBFactory indexedDB;
};
*/

window.indexedDB = new IDBFactory();
