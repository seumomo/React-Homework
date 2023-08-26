import { Link } from "react-router-dom";

function GoNextButton() {
  return (
    <Link
      to="getbirthyear"
      className="flex h-16 w-full flex-col justify-center justify-self-center rounded-full bg-green-700 text-4xl text-white transition-all hover:scale-125"
    >
      <p>띠별 운세 확인하러 가기 👉</p>
    </Link>
  );
}

export default GoNextButton;
