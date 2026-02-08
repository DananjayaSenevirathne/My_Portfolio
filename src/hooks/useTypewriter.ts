import { useEffect, useState } from "react";

export function useTypewriter(text: string, speed = 50, startDelay = 0) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setIsComplete(false);

    let index = 0;
    let timeoutId: number;

    const startTyping = () => {
      const typeChar = () => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
          timeoutId = window.setTimeout(typeChar, speed);
        } else {
          setIsComplete(true);
        }
      };
      typeChar();
    };

    const initialTimeoutId = window.setTimeout(startTyping, startDelay);

    return () => {
      window.clearTimeout(initialTimeoutId);
      window.clearTimeout(timeoutId);
    };
  }, [text, speed, startDelay]);

  return { displayedText, isComplete };
}
