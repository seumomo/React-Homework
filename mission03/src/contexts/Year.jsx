/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import debounce from "../utils/debounce";

export const YearContext = createContext({});

function YearProvider({ displayName = "YearContext", children }) {
  const [year, setYear] = useState("");
  const handleChangeYear = debounce((e) => {
    setYear(e.target.value);
  });

  const value = [year, handleChangeYear];

  return (
    <YearContext.Provider value={value} displayName={displayName}>
      {children}
    </YearContext.Provider>
  );
}

export default YearProvider;
