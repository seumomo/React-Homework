import getCurrentYear from "./getCurrentYear";

function getKoreanZodiacSign(year) {
  year = Number(year);
  const currentYear = getCurrentYear();

  if (year < 1900) {
    alert(
      "아쉽게도, 1900년 이전에 태어나신 분은 이 서비스를 이용하실 수 없습니다 😭",
    );
    return;
  } else if (year > currentYear) {
    alert("아쉽게도, 미래에서 오신 분은 이 서비스를 이용하실 수 없습니다 😭");
    return;
  }
  let koreanZodiacSign;

  switch (year % 12) {
    case 4:
      koreanZodiacSign = "쥐띠";
      alert(`🐭 ${koreanZodiacSign}이시군요!\n오늘의 운세를 봐볼까요?`);
      break;
    case 5:
      koreanZodiacSign = "소띠";
      alert(`🐮 ${koreanZodiacSign}이시군요!\n오늘의 운세를 봐볼까요?`);
      break;
    case 6:
      koreanZodiacSign = "호랑이띠";
      alert(`🐯 ${koreanZodiacSign}이시군요!\n오늘의 운세를 봐볼까요?`);
      break;
    case 7:
      koreanZodiacSign = "토끼띠";
      alert(`🐰 ${koreanZodiacSign}이시군요!\n오늘의 운세를 봐볼까요?`);
      break;
    case 8:
      koreanZodiacSign = "용띠";
      alert(`🐲 ${koreanZodiacSign}이시군요!\n오늘의 운세를 봐볼까요?`);
      break;
    case 9:
      koreanZodiacSign = "뱀띠";
      alert(`🐍 ${koreanZodiacSign}이시군요!\n오늘의 운세를 봐볼까요?`);
      break;
    case 10:
      koreanZodiacSign = "말띠";
      alert(`🐴 ${koreanZodiacSign}이시군요!\n오늘의 운세를 봐볼까요?`);
      break;
    case 11:
      koreanZodiacSign = "양띠";
      alert(`🐑 ${koreanZodiacSign}이시군요!\n오늘의 운세를 봐볼까요?`);
      break;
    case 0:
      koreanZodiacSign = "원숭이띠";
      alert(`🐵 ${koreanZodiacSign}이시군요!\n오늘의 운세를 봐볼까요?`);
      break;
    case 1:
      koreanZodiacSign = "닭띠";
      alert(`🐔 ${koreanZodiacSign}이시군요!\n오늘의 운세를 봐볼까요?`);
      break;
    case 2:
      koreanZodiacSign = "개띠";
      alert(`🐶 ${koreanZodiacSign}이시군요!\n오늘의 운세를 봐볼까요?`);
      break;
    case 3:
      koreanZodiacSign = "돼지띠";
      alert(`🐷 ${koreanZodiacSign}이시군요!\n오늘의 운세를 봐볼까요?`);
      break;
  }
  return koreanZodiacSign;
}

export default getKoreanZodiacSign;
