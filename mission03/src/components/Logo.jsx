import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link
      to="/"
      className="bg-red-700 rounded-full w-5/6 mx-auto py-7 hover:scale-110 transition-all block text-center">
      <h1 className="text-6xl text-white">Can I buy... a lotto?</h1>
    </Link>
  );
}

export default Logo;
