import PocketBase from "pocketbase";
export const pb = new PocketBase("http://127.0.0.1:8090");

export const records = await pb
  .collection("horoscope_by_korean_zodiac_sign_first")
  .getFullList();
