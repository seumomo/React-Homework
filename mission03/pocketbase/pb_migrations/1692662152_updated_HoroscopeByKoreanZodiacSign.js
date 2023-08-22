/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4n3hf8481w9la18")

  // remove
  collection.schema.removeField("ukz0wlp7")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4n3hf8481w9la18")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ukz0wlp7",
    "name": "KoreanZodiacSign1",
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
