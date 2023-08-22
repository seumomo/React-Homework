/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4n3hf8481w9la18")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1fsdcahm",
    "name": "first_comment",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "dvz5i5j3y74bo2x",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "comment"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4n3hf8481w9la18")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1fsdcahm",
    "name": "first_comment",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "dvz5i5j3y74bo2x",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
