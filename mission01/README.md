# <div align="center">Atomic Component 설계하기</div>

#### <div align="center">멋쟁이 사자처럼 프론트엔드 스쿨 6기<br>React Mission-01</div>

---

## Mission 요구 사항

- Figma로 Atomic Component를 설계하기
- 설계한 Component를 React Component로 구현하기

# Figma로 Atomic Component 설계하기

[Figma 시안 보기](https://www.figma.com/file/rLFnyuSJglcFcMTYpRTZ5s/Atomic-Components?type=design&node-id=0%3A1&mode=design&t=MWaJOXCCMcw059Ax-1)

![스크린샷 2023-08-11 174054](https://github.com/seumomo/React-homework/assets/127176650/1e63c22d-5a7e-4a9d-8c28-75096140faed)

1. Blue 색상 버튼과 Coral 색상 버튼 Component
2. 최신순, 조회순 Text Component
3. 위를 가리키는 Arrow Component

👉 조합하여 정렬방법을 변경할 수 있는 Button Component를 구현

---

# 설계한 Component를 React Component로 구현하기

<div align="center">

<img alt="스크린샷 2023-08-11 174949" src="https://github.com/seumomo/React-homework/assets/127176650/5e73dc51-463f-49bf-9a83-375af3dea6bb">

![스크린샷 2023-08-11 174959](https://github.com/seumomo/React-homework/assets/127176650/f1d7a401-b286-482f-a6e7-121d2b5ec4b3)

<img alt="스크린샷 2023-08-11 174246" src="https://github.com/seumomo/React-homework/assets/127176650/2f194b47-93ae-4467-b784-4f432ded825e">

![스크린샷 2023-08-11 175007](https://github.com/seumomo/React-homework/assets/127176650/f3defe79-b5c6-48fd-96e5-47b11f176a68)

</div>

Component를 조합하여 4가지 유형의 Button을 구현하였다.

```jsx
function Button() {
  return (
    <ButtonContainer color={'coral'}>
      <SortText method={'new'} />
      <Arrow />
    </ButtonContainer>
  );
}
```

1. ButtonContainer Component에 color props를 이용하여 색상이 변경되도록 하였다.

```jsx
function ButtonContainer({ color, children }) {
  return (
    <button
      className={
        color === 'blue' ? 'buttonContainerBlue' : 'buttonContainerCoral'
      }>
      {children}
    </button>
  );
}
```

2. SortText Component에 method props를 이용하여 text가 변경되도록 하였다.

```jsx
function SortText({ method }) {
  return (
    <div className="sortText">{method === 'new' ? '최신순' : '조회순'}</div>
  );
}
```

### 고민했던 지점

- 화살표 방향을 위 아래로 나눠서 Component를 설계하려고 하였으나, Figma 사용방법이 숙지되지 않아서 한 방향으로만 설계하였다.
