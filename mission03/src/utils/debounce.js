function debounce(callback, timeout = 300) {
  if (typeof callback !== "function") {
    throw new Error(
      "debounce 함수의 첫 번째 인수는 function type이어야 합니다.",
    );
  } else if (typeof timeout !== "number") {
    throw new Error("debounce 함수의 두 번째 인수는 number type이어야 합니다.");
  }
  let cleanup;

  return (...args) => {
    clearTimeout(cleanup);
    cleanup = setTimeout(callback.bind(null, ...args), timeout);
  };
}

export default debounce;
