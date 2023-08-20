# <div align="center">React를 이용하여 Naver Login Page 구현하기</div>

#### <div align="center">멋쟁이 사자처럼 프론트엔드 스쿨 6기<br>React Mission-02</div>

---

## Mission 요구 사항

- React 컴포넌트를 구성한 후, 컴포넌트를 조립해 웹 사이트 랜딩 페이지를 구현하여 배포합니다.

---

# 결과물

<div align="center">
<img width="393" alt="스크린샷 2023-08-20 104851" src="https://github.com/seumomo/React-Homework/assets/127176650/b8cd2a1c-7a5c-4b78-b2ba-99e596748ed6">
</div>

---

## Headings, Component, Directory의 구성은 다음과 같다.

<div align="center">
<img height="150" alt="스크린샷 2023-08-20 104959" src="https://github.com/seumomo/React-Homework/assets/127176650/72a46759-727b-4ad9-8102-3dc67bbf3060">
<img height="150" alt="스크린샷 2023-08-20 105110" src="https://github.com/seumomo/React-Homework/assets/127176650/9c66acd6-2e18-4cea-bb86-2da89270a110">
</div>

---

## ID와 PW의 유효성 검사 기능 구현

<div align="center">
<img width="394" alt="스크린샷 2023-08-20 104903" src="https://github.com/seumomo/React-Homework/assets/127176650/dbb3f505-1fe7-43d9-8264-9ffb10f2c6ff">
<img width="375" alt="스크린샷 2023-08-20 104917" src="https://github.com/seumomo/React-Homework/assets/127176650/f76cc9f3-c462-4e00-ab69-91cc6821800c">
</div>

1. ID와 PW의 `input value` / `validation` 여부를 상태로 관리하였다.

```jsx
  const [inputText, setInputText] = useState({
    idValue: '',
    pwValue: '',
  });

  const [validation, setValidation] = useState({
    idIsValid: '',
    pwIsValid: '',
  });
}
```

2. `useEffect` `Hook`을 사용하여, `input`의 `value`가 변경될 때마다, `~IsValid` 상태가 변경되도록 하였다.
   👉 `validationID|PW` 함수를 만들어서 정규식 표현에 부합하는지 여부를 검사하였다.

- **예상치 못한 현상 발생**
  1. `input` 요소에 입력하게 되면, **입력하지 않은 다른 쪽의 `input` 요소에도 유효성 검사에 통과하지 못했다는 문구가 렌더링되었다.**
  1. ID를 입력하고 유효성 검사를 통과한 후에 PW `input` 요소에 `focus`하게 되면,
     **ID가 다시 유효성 검사에 통과하지 못하는 것으로 바뀌었다.**
- **해결 방법**
  1. `readme`를 작성할 시점에서 어떻게 해결했었나 기억이 나지 않았다. `error`가 발생할 때마다 `commit`하여 기록해 두어야겠다..

```jsx
useEffect(() => {
  validationId(inputText.idValue)
    ? setValidation(prevState => ({
        ...prevState,
        idIsValid: true,
      }))
    : setValidation(prevState => ({
        ...prevState,
        idIsValid: false,
      }));
}, [inputText.idValue]);

useEffect(() => {
  validationPw(inputText.pwValue)
    ? setValidation(prevState => ({
        ...prevState,
        pwIsValid: true,
      }))
    : setValidation(prevState => ({
        ...prevState,
        pwIsValid: false,
      }));
}, [inputText.pwValue]);
```

3. `input`의 `value`가 입력될 때, `onChange` 함수를 사용하여 `setInputText`의 상태가 업데이트 되도록 하였다.

- **예상치 못한 현상 발생**
  1. 2번의 `error`를 해결하는 과정에서 ID 또는 PW의 `input`에 `value`를 입력하고, 다른 쪽의 `input`에 `value`를 입력하면, **기존에 입력했던 `value`가 초기화되는 현상이 발생했다.**
     👉 `value`를 입력하여 상태가 업데이트 될 때마다, 기존에 입력한 `value`는 초깃값으로 설정한 `공백`으로 인해 초기화되는 것 같았다.
- **해결 방법** : 2번과 동일하게, `set함수`에 인수를 함수로 처리하여, `spread syntax`를 사용하여 기존에 입력한 값도 유지되도록 하였다.

```jsx
<InputId
  value={inputText.idValue}
  onChange={e => {
    setInputText(prevState => ({
      ...prevState,
      idValue: e.target.value,
    }));
  }}
  idIsValid={validation.idIsValid}
/>
```

4. `로그인 상태 유지` `checkbox`가 `checked` 상태가 될 때, `alert` 창이 출력되도록 했다.
<div align="center">
<img width="385" alt="스크린샷 2023-08-20 104929" src="https://github.com/seumomo/React-Homework/assets/127176650/6326b95f-ca11-4561-9e1e-43c7abe657a2">
</div>

5. ID와 PW 모두 유효성 검사의 통과했을 때, `로그인 버튼`이 활성화 되도록 하고 클릭 시 `alert` 창이 출력되도록 했다.
<div align="center">
   <img width="399" alt="스크린샷 2023-08-20 104939" src="https://github.com/seumomo/React-Homework/assets/127176650/0d4ac7aa-f1e5-4856-b4a5-6d78c6cacd5a">
</div>

### 후기

1. 상태를 최소화해야 한다고 생각했는데, 어떤 것을 상태로 설정해야 하는 것인지 감이 잘 안 잡혔다.
1. `useEffect` `Hook` 2개가 공통되는 부분이 많아, `Custom Hook`을 만들어보려고 했으나, 만들지 못했다. 학습이 더 필요할 것 같다.
1. 상위 `Component`와 하위 `Component` 중에서 어떤 `Component`에 `속성`을 부여해야 하는지가 감이 잘 안 잡혔다.
   시간이 부족해서 겉으로 보기에 간단해 보이는 네이버 로그인 페이지를 구현하였는데, 생각보다 어려워서 꽤나 헤맸던 것 같다.
1. `Atomic Component`를 많이 만들어보고, 또 합쳐보는 연습이 많이 필요하다고 생각된다.
