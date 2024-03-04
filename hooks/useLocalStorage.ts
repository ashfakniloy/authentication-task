import { useState, useEffect } from "react";

type ReturnValue<T> = {
  storageValue: T | null;
  storageLoading: boolean;
  setStorageValue: (value: T) => void;
  removeStorageValue: () => void;
};

function useLocalStorage<T>(key: string, initialValue?: T): ReturnValue<T> {
  const [value, setValueState] = useState<T | null>(() => {
    if (typeof window !== "undefined") {
      try {
        const storedValue = localStorage.getItem(key);
        return storedValue !== null
          ? JSON.parse(storedValue)
          : initialValue ?? null;
      } catch (error) {
        console.error(`Error reading from localStorage: ${error}`);
      }
    }
    return initialValue ?? null;
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const storedValue = localStorage.getItem(key);
        if (storedValue !== null) {
          setValueState(JSON.parse(storedValue));
        } else {
          setValueState(initialValue ?? null);
        }
        setLoading(false);
      } catch (error) {
        console.error(`Error reading from localStorage: ${error}`);
        setLoading(false);
      }
    }
  }, [key, initialValue]);

  const setStorageValue = (newValue: T) => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(key, JSON.stringify(newValue));
        setValueState(newValue);
      } catch (error) {
        console.error(`Error writing to localStorage: ${error}`);
      }
    }
  };

  const removeStorageValue = () => {
    if (typeof window !== "undefined") {
      try {
        localStorage.removeItem(key);
        setValueState(null);
      } catch (error) {
        console.error(`Error removing from localStorage: ${error}`);
      }
    }
  };

  return {
    storageLoading: loading,
    storageValue: value,
    setStorageValue,
    removeStorageValue,
  };
}

export default useLocalStorage;
