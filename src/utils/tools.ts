import { useEffect, useState } from "react";

export const isFalse = (value: number) => {
  return value === 0 ? false : !value;
};
export const cleanObject = (object: { [x: string]: any }) => {
  const result = { ...object };
  Object.keys(object).forEach((key) => {
    const value = object[key];
    if (isFalse(value)) {
      delete result[key];
    }
  });
  return result;
};

export const useDebounce = <T>(value: T, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearInterval(timer);
    };
  }, [value, delay]);

  return debounceValue;
};

// export const debounce = (fun,delay)=>{
//     let timer = null;
//     return function (...params) {
//         if(timer){
//             clearInterval(timer)
//         }
//         timer = setTimeout(() => {
//             fun(params);
//         }, delay);
//     }
// }
