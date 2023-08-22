/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4n3hf8481w9la18")

  // remove
  collection.schema.removeField("aegpoepg")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4n3hf8481w9la18")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aegpoepg",
    "name": "field",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
