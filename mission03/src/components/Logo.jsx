/* eslint-disable no-undef */
import { Link } from "react-router-dom";
import useBirth from "./../hooks/useBirth";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";

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
      to="/"
      className="mx-auto block w-5/6 rounded-full bg-red-700 py-7 text-center transition-all hover:scale-110"
      onClick={() => {
        setBirth({ year: "", koreanZodiacSign: "" });
      }}
    >
      <h1 className="text-6xl text-white">Can I buy... a lotto?</h1>
    </Link>
  );
}

export default Logo;
