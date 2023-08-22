/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "4n3hf8481w9la18",
    "created": "2023-08-21 23:54:47.582Z",
    "updated": "2023-08-21 23:54:47.582Z",
    "name": "HoroscopeByKoreanZodiacSign",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bulwxy6p",
        "name": "KoreanZodiacSign",
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
  const collection = dao.findCollectionByNameOrId("4n3hf8481w9la18");

  return dao.deleteCollection(collection);
})
