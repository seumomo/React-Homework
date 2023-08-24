import { useContext } from "react";
import { YearContext } from "../contexts/Year";

function useYear() {
  const value = useContext(YearContext);

  if (value === undefined) {
    throw new Error("useYear Hook은 YearProvider 안에서 사용되어야 합니다.");
  }

  return value;
}

export default useYear;
