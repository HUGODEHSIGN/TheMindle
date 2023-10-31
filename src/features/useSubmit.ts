import { useEffect, useState } from 'react'

export const useSubmit = (guess: string[], answer: string[]) => { 
    const handleKeyDown = ({ key }: { key: string }) => {
  
        const isEnter = key === "Enter";
    
        if (isEnter) {
            console.log(guess);
            console.log(answer);
            
        } 
      };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
          window.removeEventListener("keydown", handleKeyDown);
        };
      }, []);
}