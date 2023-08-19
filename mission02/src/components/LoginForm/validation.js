export function validationId(text) {
  const result = /.+@naver.com$/;

  return result.test(text);
}

export function validationPw(text) {
  const result = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~!@#$%^&*]).{8,16}$/;

  return result.test(text);
}
