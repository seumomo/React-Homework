import { records } from "../api/pocketbase";

function Navigation() {
  return (
    <div className="absolute bottom-20 w-full text-center">
      {records && (
        <ul className="grid grid-cols-6 gap-x-4 gap-y-8">
          {records.map((item) => {
            return (
              <li
                className="flex flex-col justify-center rounded-full bg-slate-300 p-5 text-xs font-semibold"
                key={item.korean_zodiac_sign}
              >
                {item.korean_zodiac_sign}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Navigation;
