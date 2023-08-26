import PocketBase from "pocketbase";
import getDateType from "./../utils/getDateType";
export const pb = new PocketBase("https://seumomo-taeilkim.pockethost.io");
export const records = await pb

  .collection(
    getDateType() === "Odd"
      ? "horoscope_by_korean_zodiac_sign_first"
      : "horoscope_by_korean_zodiac_sign_second",
  )
  .getFullList();
