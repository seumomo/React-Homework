function NaverLogo() {
  return (
    <a
      href="/"
      className="bg-[url('/src/assets/naverLogo.svg')] w-[230px] h-11 bg-no-repeat"
      onClick={e => {
        e.preventDefault();
        window.location.href = 'https://www.naver.com';
      }}></a>
  );
}

export default NaverLogo;
