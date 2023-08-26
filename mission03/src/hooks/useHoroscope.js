import { records } from "../api/pocketbase";
import useBirth from "./useBirth";

function useHoroscope() {
  const { birth } = useBirth();
  const { koreanZodiacSign } = birth;

  if (!koreanZodiacSign) {
    throw new Error(
      "어떤 띠인지 파악되지 않았습니다. 홈으로 돌아가서 연도를 입력해 주세요.",
    );
  }

  let dataIndex;

  records.forEach((item, index) => {
    if (item.korean_zodiac_sign === koreanZodiacSign) {
      dataIndex = index;
      return dataIndex;
    }
  });

  return records[dataIndex].comment;
}

export default useHoroscope;
