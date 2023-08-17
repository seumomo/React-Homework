function InputBox({ boxType }) {
  return (
    <>
      <label
        htmlFor={boxType === 'id' ? 'inputId' : 'inputPw'}
        className="sr-only">
        {boxType === 'id' ? '아이디 입력 창' : '비밀번호 입력 창'}
      </label>
      <input
        type={boxType === 'id' ? 'email' : 'password'}
        name={boxType === 'id' ? 'inputId' : 'inputPw'}
        id={boxType === 'id' ? 'inputId' : 'inputPw'}
        placeholder={
          boxType === 'id'
            ? '아이디를 입력해 주세요.'
            : '비밀번호를 입력해 주세요.'
        }
        pattern={
          boxType === 'id'
            ? '.+@naver.com'
            : '^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_-+=[]{}~?:;`|/]).{8,16}$'
        }
        minLength={boxType === 'id' ? '' : 8}
        maxLength={boxType === 'id' ? '' : 16}
        title={
          boxType === 'id'
            ? "아이디는 '@naver.com'로 끝나야 합니다."
            : '비밀번호는 숫자, 영어 대소문자, 특수문자(~!@#$%^&*)를 포함하여 8~16자로 작성하여야 합니다.'
        }
        aria-describedby="fff"
        required
        className="w-[460px] h-12 border border-solid border-gray-400 placeholder: pl-[14px]"
      />
    </>
  );
}

export default InputBox;
