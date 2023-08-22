import { Link } from 'react-router-dom';

function GoNextButton() {
  return (
    <Link
      to="getbirthyear"
      className="bg-green-700 text-4xl text-white w-full rounded-full hover:scale-125 transition-all h-16 justify-self-center flex flex-col justify-center">
      <p>띠별 운세 확인하러 가기 👉</p>
    </Link>
  );
}

export default GoNextButton;
