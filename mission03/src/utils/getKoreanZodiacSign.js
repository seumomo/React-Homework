import getCurrentYear from "./getCurrentYear";

function getKoreanZodiacSign(year) {
  const currentYear = getCurrentYear();

  if (year < 1900) {
    alert(
      "아쉽게도, 1900년 이전에 태어나신 분은 이 서비스를 이용하실 수 없습니다 😭",
    );
  } else if (year > currentYear) {
    alert("아쉽게도, 미래에서 오신 분은 이 서비스를 이용하실 수 없습니다 😭");
  }

  switch (year) {
    case year % 12 === 4:
      "쥐띠";
      break;
    case year % 12 === 5:
      "소띠";
      break;
    case year % 12 === 6:
      "호랑이띠";
      break;
    case year % 12 === 7:
      "토끼띠";
      break;
    case year % 12 === 8:
      "용띠";
      break;
    case year % 12 === 9:
      "뱀띠";
      break;
    case year % 12 === 10:
      "말띠";
      break;
    case year % 12 === 11:
      "양띠";
      break;
    case year % 12 === 0:
      "원숭이띠";
      break;
    case year % 12 === 1:
      "닭띠";
      break;
    case year % 12 === 2:
      "개띠";
      break;
    case year % 12 === 3:
      "돼지띠";
      break;
  }
}

export default getKoreanZodiacSign;
