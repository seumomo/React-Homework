import { Link } from "react-router-dom";
import useBirth from "./../hooks/useBirth";

function GoHomeButton() {
  const { setBirth } = useBirth();

  return (
    <Link
      to="/"
      className="mx-auto mt-10 flex h-16 w-1/3 items-center justify-center rounded-full bg-red-700 text-center text-2xl text-white transition-all hover:scale-125"
      onClick={() => {
        setBirth({ year: "", koreanZodiacSign: "" });
      }}
    >
      <p>처음으로 돌아가기 🏠</p>
    </Link>
  );
}

export default GoHomeButton;
