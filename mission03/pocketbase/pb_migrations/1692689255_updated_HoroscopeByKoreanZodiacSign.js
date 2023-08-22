/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4n3hf8481w9la18")

  // remove
  collection.schema.removeField("gzqxl4rc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zegfolmz",
    "name": "CommentList",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 3,
      "values": [
        "First",
        "Second",
        "Third"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4n3hf8481w9la18")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gzqxl4rc",
    "name": "Comment",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("zegfolmz")

  return dao.saveCollection(collection)
})
