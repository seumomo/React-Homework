function LoginButton({ isValid }) {
  const LoginButtonColor = isValid ? 'bg-[#03CF5D]' : 'bg-[#4a4d4b]';

  return (
    <button
      type="submit"
      className={`w-[460px] h-14 ${LoginButtonColor} text-white font-bold`}>
      로그인
    </button>
  );
}

export default LoginButton;
