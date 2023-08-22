/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4n3hf8481w9la18")

  // remove
  collection.schema.removeField("catxbok5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qtnlvp5z",
    "name": "first",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xcb74byv",
    "name": "second",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "psahgzoj",
    "name": "third",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bulwxy6p",
    "name": "korean_zodiac_sign",
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
  const collection = dao.findCollectionByNameOrId("4n3hf8481w9la18")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "catxbok5",
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
  collection.schema.removeField("qtnlvp5z")

  // remove
  collection.schema.removeField("xcb74byv")

  // remove
  collection.schema.removeField("psahgzoj")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
