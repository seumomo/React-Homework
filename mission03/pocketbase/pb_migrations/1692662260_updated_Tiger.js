/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4vcni0eu7fglfk1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b5nz4fll",
    "name": "horoscope",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4vcni0eu7fglfk1")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
