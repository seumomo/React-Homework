/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4n3hf8481w9la18")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "j4slu3iz",
    "name": "comment_list",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "first",
        "second",
        "third"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4n3hf8481w9la18")

  // remove
  collection.schema.removeField("j4slu3iz")

  return dao.saveCollection(collection)
})
