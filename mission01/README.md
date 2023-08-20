# <div align="center">Atomic Component 설계하기</div>

#### <div align="center">멋쟁이 사자처럼 프론트엔드 스쿨 6기<br>React Mission-01</div>

---

## Mission 요구 사항

- Figma로 Atomic Component를 설계하기
- 설계한 Component를 React Component로 구현하기

# Figma로 Atomic Component 설계하기

[Figma 시안 보기](https://www.figma.com/file/rLFnyuSJglcFcMTYpRTZ5s/Atomic-Components?type=design&node-id=0%3A1&mode=design&t=MWaJOXCCMcw059Ax-1)

![스크린샷 2023-08-11 174054](https://github.com/seumomo/React-Homework/assets/127176650/2df7bb40-1181-4b96-b885-feae9dfb6e12)

1. Blue 색상 버튼과 Coral 색상 버튼 Component
2. 최신순, 조회순 Text Component
3. 위를 가리키는 Arrow Component

👉 조합하여 정렬방법을 변경할 수 있는 Button Component를 구현

---

# 설계한 Component를 React Component로 구현하기

<div align="center">

<img width="200" alt="스크린샷 2023-08-11 174949" src="https://github.com/seumomo/React-Homework/assets/127176650/52c66dbc-9195-4221-8df4-6352d3317888">

<img width="200" alt="스크린샷 2023-08-11 174949" src="https://github.com/seumomo/React-Homework/assets/127176650/cea42270-e7b6-4585-b6d5-fce50daa60a5">

<img width="200" alt="스크린샷 2023-08-11 174949" src="https://github.com/seumomo/React-Homework/assets/127176650/3ce55c22-11e7-4e07-ae30-ac7cd445f2cb">

<img width="200" alt="스크린샷 2023-08-11 174949" src="https://github.com/seumomo/React-Homework/assets/127176650/1b6136ee-9623-48a4-ab3c-e6972e79db13">

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
