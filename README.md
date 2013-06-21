#indexeddb-types

The W3C IndexedDB IDL Definitions in JavaScript for Code Completion and Type Hinting in Your Editor.

#About

Most editors and IDEs are missing the [W3C IndexedDB API](http://www.w3.org/TR/IndexedDB/). This repository contains all relevant definitions in JavaScript, so you can get code completion, parameter info, argument type hinting, return type hinting and wrong type assignment checks in yourIDE of choice.

The definitions are taken from the latest draft, which is at the time of writing the version [published 16 May 2013](http://www.w3.org/TR/2013/WD-IndexedDB-20130516/).

#Usage

Clone / download this repository, or just download the `IndexedDB.js` file. Then tell your editor / IDE to treat the `IndexedDB.js` file as a library.

A detailed instruction can be found [in this post](http://jensarps.de/2013/06/21/indexeddb-code-completion-and-type-hinting/).

#Notes

1. This repository does not contain enum definitions like `IDBTransactionMode` or `IDBRequestReadyState`.
2. If your editor chokes on the types `DOMStringList` or `DOMError`, also include the `IDL/DOMCore/DOMCore.js` file.
