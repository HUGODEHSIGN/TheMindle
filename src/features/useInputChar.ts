import { useEffect, useState } from "react";



export const useInputChar = () => {

  const [guess, setGuess] = useState<Array<string>>([]);

  const handleKeyDown = ({ key }: { key: string }) => {
    const isLetter = /^[a-z]$/.test(key);
    const isBackspace = key === "Backspace";
    if (isLetter) {
      if (guess.length < 5) {
        setGuess((prev) => [...prev, key]);

      }
    } else if (isBackspace) {
      if (guess.length > 0) {
        setGuess((prev) => {
          const currentGuess = [...prev];
          currentGuess.pop();

          return currentGuess;
        });
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [guess]);
  return guess;
};
