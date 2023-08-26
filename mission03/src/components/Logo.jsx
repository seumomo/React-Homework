import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import useBirth from "./../hooks/useBirth";

function Logo() {
  const { setBirth } = useBirth();
  const logoRef = useRef();

  useLayoutEffect(() => {
    gsap.set(logoRef.current, { scale: 1.7 });
    gsap.to(logoRef.current, { scale: 1 });
  }, []);

  return (
    <Link
      ref={logoRef}
      to="/todays-horoscope"
      className="mx-auto block w-5/6 rounded-full bg-red-700 py-7 text-center transition-all hover:scale-110"
      onClick={() => {
        setBirth({ year: "", koreanZodiacSign: "" });
      }}
    >
      <h1 className="text-6xl text-white">Can I buy... a lottery?</h1>
    </Link>
  );
}

export default Logo;
