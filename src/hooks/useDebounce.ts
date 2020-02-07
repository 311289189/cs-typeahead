import { useState, useEffect } from 'react';

const useDebounce = <T extends unknown>(value: T, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(
    () => {
      const handler = setTimeout(() => setDebouncedValue(value), delay);
      return () => clearTimeout(handler);
    },
    // eslint-disable-next-line
    [value]
  );

  return debouncedValue;
}

export default useDebounce
