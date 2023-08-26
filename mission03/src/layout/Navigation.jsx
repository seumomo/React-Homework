import { func } from "prop-types";
import { records } from "../api/pocketbase";

function Navigation({ onClick }) {
  return (
    <div className="absolute bottom-20 w-full text-center">
      {records && (
        <ul className="grid grid-cols-6 gap-x-4 gap-y-8">
          {records.map((item) => {
            return (
              <li key={item.korean_zodiac_sign} aria-haspopup>
                <button
                  id="modal-horoscope"
                  type="button"
                  className="relative w-24 rounded-full bg-green-600 p-5 text-xs font-semibold text-white transition-all hover:scale-125"
                  onClick={onClick}
                >
                  {item.korean_zodiac_sign}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

Navigation.propTypes = {
  onClick: func,
};

export default Navigation;
