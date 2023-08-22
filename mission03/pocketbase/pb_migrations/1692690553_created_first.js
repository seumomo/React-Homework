/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "dvz5i5j3y74bo2x",
    "created": "2023-08-22 07:49:13.421Z",
    "updated": "2023-08-22 07:49:13.421Z",
    "name": "first",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mykmdiwc",
        "name": "comment",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "yawmcjm3",
        "name": "field",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "4n3hf8481w9la18",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
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
  const collection = dao.findCollectionByNameOrId("dvz5i5j3y74bo2x");

  return dao.deleteCollection(collection);
})
