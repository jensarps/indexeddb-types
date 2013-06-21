#
# make targets:
#

default: indexeddb

indexeddb:
	cat IDL/IndexedDB/* > IndexedDB.js

all:
	cat IDL/**/* > IndexedDB.js
