/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dvz5i5j3y74bo2x")

  collection.name = "first_comment"

  // update
  collection.schema.addField(new SchemaField({
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
      "maxSelect": null,
      "displayFields": [
        "korean_zodiac_sign",
        "comment"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dvz5i5j3y74bo2x")

  collection.name = "first"

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
