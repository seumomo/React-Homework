/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "wrcyq3589svm8ut",
    "created": "2023-08-23 07:21:13.937Z",
    "updated": "2023-08-23 07:21:13.937Z",
    "name": "horoscope_by_korean_zodiac_sign_second",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "unkfr1lg",
        "name": "korean_zodiac_sign",
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
        "id": "cx0brp7a",
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
        "id": "efxvhjzu",
        "name": "order",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("wrcyq3589svm8ut");

  return dao.deleteCollection(collection);
})
