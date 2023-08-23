/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import debounce from "../utils/debounce";

const YearContext = createContext();

function YearProvider({ displayName = "YearContext", children }) {
  const [year, setYear] = useState("");
  const handleChangeYear = debounce((e) => {
    setYear(e.target.value);
  });

  return (
    <YearContext.Provider
      value={year}
      onChange={handleChangeYear}
      displayName={displayName}
    >
      {children}
    </YearContext.Provider>
  );
}

export default YearProvider;
