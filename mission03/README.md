# <div align="center">오늘의 띠별 운세 보기 서비스 구현하기</div>

#### <div align="center">멋쟁이 사자처럼 프론트엔드 스쿨 6기<br>React Mission-03</div>

---

## Mission 요구 사항

- React 컴포넌트 간 상태 관리 및 데이터 패치, 데이터 캐시, 페이지 라우팅 등 학습한 것을 활용한 간단한 미니 프로젝트를 진행하고 배포한 URL과 GitHub 저장소 URL을 제출합니다.

---

# 사용 기술

<div align="center">

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=black" height="30px"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" height="30px"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black" height="30px"> <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=black" height="30px">

<img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=black" height="30px"> <img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=black" height="30px"> <img src="https://img.shields.io/badge/greensock-88CE02?style=for-the-badge&logo=greensock&logoColor=black" height="30px"> <img src="https://img.shields.io/badge/pocketbase-B8DBE4?style=for-the-badge&logo=pocketbase&logoColor=black" height="30px">

</div>

# 결과물

<div align="center">

<img width="1152" alt="스크린샷 2023-08-27 071727" src="https://github.com/seumomo/Project-F4/assets/127176650/55525928-07f8-479d-9c83-f020a0c9154b">

</div>

[배포 주소 바로가기](https://seumomo.github.io/todays-horoscope/)

---

## Directory 구성

<div align="center">
<img height="500" alt="스크린샷 2023-08-27 073054" src="https://github.com/seumomo/Project-F4/assets/127176650/39fac7a4-daad-4c77-ac66-ebbf217c454b">
</div>

---

## React Router를 이용한 Page 구성

<div align="center">

<img height="500" alt="ReactRouter" src="https://github.com/seumomo/Project-F4/assets/127176650/49728ab4-7ced-4d24-a642-91a3afb960ff">
</div>

</div>

---

## Landing Page

(gasp, CSS-transition 활용한 Animation 적용)

<div align="center">

<img width="1152" alt="Landing Page" src="https://github.com/seumomo/Project-F4/assets/127176650/6371181a-0929-496f-b847-bb7241c99b8e">

</div>

1. 상단의 `Logo`는 이 서비스의 `Main Logo`로서, 해당 `Logo`를 `click`할 경우 `Landing Page`로 이동합니다.
1. `띠별 운세 확인하러 가기` `Button`을 `click`하면, 다음 `Page`로 이동합니다.

---

## Get Birth Year Page (출생연도 입력하기)

<div align="center">

<img width="1152" alt="스크린샷 2023-08-27 085320" src="https://github.com/seumomo/Project-F4/assets/127176650/c7848ac2-9ff1-4ccc-9756-3bf493b4851a">

</div>

- 출생연도를 입력하면, 어떤 띠인지 파악하여 `alert` 창으로 결과를 출력합니다.

  - 적절한 연도를 입력한 경우에는, `switch`문을 활용한 `%` 연산을 이용하여 결과를 `alert` 창에 출력합니다.
  - 1900년 미만의 연도를 입력한 경우에는 서비스 이용이 불가하다는 `alert` 창을 출력합니다.
  - `Date` 객체를 이용하여 현재 연도 이후의 연도를 입력한 경우에는 서비스 이용이 불가하다는 `alert` 창을 출력합니다.

  > `input` 요소의 `type`이 `number`인 경우에는, `maxLength`가 동작되지 않는다는 것을 배웠다.

```jsx
function getKoreanZodiacSign(year) {
  if (typeof year !== "number" && typeof year !== "string") {
    throw new Error(
      "getKoreanZodiacSign 함수의 인수는 number 또는 string type이어야 합니다.",
    );
  }
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
    .
    .
    .
  }
  return koreanZodiacSign;
}
```

<div align="center">

<img width="1152" alt="스크린샷 2023-08-27 085320" src="https://github.com/seumomo/Project-F4/assets/127176650/53dd5dea-2eda-4531-b79f-dfaba1472658">

</div>

- `input` 요소에 `hover`하면 `Tooltip`을 보여줍니다.
- `input` 요소에 `focus`된 경우에는 `CSS-transition`을 이용한 `Animation`이 작동됩니다.

<div align="center">

<img width="1152" alt="스크린샷 2023-08-27 085320" src="https://github.com/seumomo/Project-F4/assets/127176650/6ea6a7e4-d04f-4c9b-8912-aaaed433a6fe">

</div>

- 적절한 연도를 입력하고 `운세보러 가기`를 `click`하면 `alert` 창이 출력되며, `확인`을 누르면 다음 `Page`로 이동합니다.
- 4자리의 연도가 입력되면 `CSS-transition`을 이용한 `Animation` 효과로, `운세보러 가기`가 화면 밖, 오른쪽에서부터 가운데로 이동됩니다.

```jsx
<button
  className={`scale-125 text-3xl font-bold text-green-500 transition-all duration-[400ms] ${
    isFull ? "translate-x-0 hover:scale-150" : "translate-x-[9999px]"
  }`}
  disabled={isFull ? false : true}
  aria-hidden={isFull ? false : true}
  onClick={handleCheckBirth}
>
  운세보러 가기! 👉
</button>
```

- **_사용자가 입력한 `year`와 그로부터 도출된 `띠`가_** 이 서비스를 이용하는 동안 관리되어야 하기 때문에, `Context`로 관리했습니다.

```jsx
function BirthProvider({ displayName = "BirthContext", children }) {
  const [birth, setBirth] = useState({
    year: "",
    koreanZodiacSign: "",
  });

  const handleChangeYear = debounce((e) => {
    setBirth((prevState) => ({ ...prevState, year: e.target.value }));
  }, 150);

  const getSign = () => {
    setBirth((prevState) => ({
      ...prevState,
      koreanZodiacSign: getKoreanZodiacSign(birth.year),
    }));
  };

  return (
    <BirthContext.Provider
      value={{ birth, setBirth, handleChangeYear, getSign }}
      displayName={displayName}
    >
      {children}
    </BirthContext.Provider>
  );
}
```

> `Context`를 구성하면서, `Component` 간에 `props`를 전달하듯이, `props`의 이름을 지정하여 전달했더니 `error`가 발생했다.
>
> - `Provider`에는 하위 `Component`에 전달할 `props`들을 모두 `value`에 담아야 한다는 것을 배웠다.

<div align="center">

<img width="1152" alt="스크린샷 2023-08-27 085320" src="https://github.com/seumomo/Project-F4/assets/127176650/1f07d223-e706-43e7-8ccd-edd40a21f073">
<img width="1152" alt="스크린샷 2023-08-27 085320" src="https://github.com/seumomo/Project-F4/assets/127176650/d12c45ee-fae5-477e-ad55-52839cf6c69a">

</div>

- 1900년 미만의 연도 또는 미래의 연도를 입력하면 서비스 이용이 불가하다는 `alert` 창이 출력되며, 이 경우에는 `Page`이동이 일어나지 않습니다.

```jsx
const handleCheckBirth = () => {
  if (birth.year < 1900 || currentYear < birth.year) {
    getSign(birth.year);
  } else {
    getSign(birth.year);
    navigate("/horoscope");
  }
};
```

---

## Horoscope Page (오늘의 운세 보기)

<div align="center">

<img width="1152" alt="스크린샷 2023-08-27 085320" src="https://github.com/seumomo/Project-F4/assets/127176650/1bc9ddaf-7250-4249-80f9-4c714e35ac8b">

</div>

- 사용자의 `띠`와 `Pocket Base`에 저장된 `Data`에서 일치하는 `띠`의 `운세`가 출력됩니다.

  - `오늘의 운세`이기 때문에 날마다 다른 `운세`가 출력되어야 하므로, 현재 날짜의 `홀`, `짝`을 구분하여 2가지 유형의 `운세`가 출력되도록 하였습니다.

- `처음으로 돌아가기`를 `click`할 경우, `Landing Page`로 돌아갑니다.

```jsx
function getDateType() {
  const date = new Date().getDate();

  return date % 2 === 0 ? "Even" : "Odd";
}
```

```jsx
export const pb = new PocketBase("https://seumomo-taeilkim.pockethost.io");
export const records = await pb
  .collection(
    getDateType() === "Odd"
      ? "horoscope_by_korean_zodiac_sign_first"
      : "horoscope_by_korean_zodiac_sign_second",
  )
  .getFullList();
```

```jsx
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
```

<div align="center">

<img width="1152" alt="스크린샷 2023-08-27 085320" src="https://github.com/seumomo/Project-F4/assets/127176650/8968e2e3-0a80-47f4-94ad-4b5996cfc629">

</div>

- 하단 `Navigation`에서 다른 `띠`를 `click`하게 되면 해당 `띠`의 `오늘의 운세`가 `Modal Dialog`에 출력됩니다.

  - `Modal Dialog`가 출력되어 있을 때에도 하단 `Navigation`에 접근이 가능하며, 우측 상단의 ❌를 클릭하여야 `Modal Dialog`가 닫힙니다.

- `aria-pressed` 속성으로 해당 `Modal Dialog`가 `press`되었는지에 대한 정보를 줍니다.

```jsx
const [, forceRendering] = useState();

const handleCloseModal = () => {
  document.querySelector("#modalContainer").classList.add("hidden");
  forceRendering({});
};
```

```jsx
<div
  id="modal"
  className="relative mx-auto mt-[30vh] flex w-3/4 flex-col items-center gap-y-6 rounded-2xl border border-green-300 bg-yellow-300 p-10"
  role="dialog"
  tabIndex="0"
  aria-labelledby="modal-horoscope"
  aria-pressed={
    document
      .querySelector("#modalContainer")
      ?.classList.contains("hidden")
      ? false
      : document.querySelector("#modalContainer")
      ? true
      : false
  }
>
```

> 과제 제출 날 이 속성에 대해 급히 알게 되었는데, 반드시 추가되어야 할 접근성 요소로 보여서 급하게 어거지로 추가되었습니다....

`Modal Dialog`의 `class`에 `hidden`이 있는지 여부에 따라 `true` || `false`가 되도록 했습니다.

- `Modal Dialog`가 닫히더라도 `re-Rendering`되지 않기 때문에, `aria-pressed`의 값이 변경되지 않아, 상위 `Component`에서 강제 `re-Rendering`을 위한 `State`를 만들었습니다.

### 후기

1. 간단하게라도 배운 것들을 가능한 한 많이 사용해보려고 하면서, 다양한 기술들을 익힌 것 같다.
1. `React Router`를 사용하면서, 수업 때 배운 버전과 다르게 최신 버전을 이용하려고 했고, 이 과정에서 공식 문서를 토대로 처음부터 시작해보는 경험을 했다.
1. 공식문서는 영어이고 길어서, 보는 게 꺼려졌는데 이 연습을 통해 자신감을 얻었다.
1. 수업 때 이해가 부족했던 `React Router`와 `Context`의 개념이, 이번 기회를 통해 많이 보완되었다.
1. 처음부터 모든 것을 만들다보니, `Animation`을 적용하는 것과 `색상`을 조합하는 능력이 많이 부족함을 느꼈다.
