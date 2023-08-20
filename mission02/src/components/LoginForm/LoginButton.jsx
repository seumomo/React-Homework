function LoginButton({ isValid }) {
  return (
    <button
      type="submit"
      className={`w-[460px] h-14 ${
        isValid ? 'bg-[#03CF5D]' : 'bg-[#4a4d4b]'
      } text-white font-bold`}
      disabled={isValid ? false : true}>
      로그인
    </button>
  );
}

export default LoginButton;
