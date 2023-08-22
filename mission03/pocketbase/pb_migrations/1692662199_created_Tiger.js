/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "4vcni0eu7fglfk1",
    "created": "2023-08-21 23:56:39.587Z",
    "updated": "2023-08-21 23:56:39.587Z",
    "name": "Tiger",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "b5nz4fll",
        "name": "aaaa",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4vcni0eu7fglfk1");

  return dao.deleteCollection(collection);
})
