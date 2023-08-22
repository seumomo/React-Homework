/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4n3hf8481w9la18")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n9zjilx6",
    "name": "Date",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4n3hf8481w9la18")

  // remove
  collection.schema.removeField("n9zjilx6")

  return dao.saveCollection(collection)
})
