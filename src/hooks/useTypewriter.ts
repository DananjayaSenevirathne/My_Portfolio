import { useEffect, useState } from "react";

export function useTypewriter(text: string, speed = 50, startDelay = 0) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeoutId: number | undefined;
    let startTimeoutId: number | undefined;

    setDisplayedText("");
    setIsComplete(false);

    const startTyping = () => {
      let index = 0;

      const typeChar = () => {
        if (index < text.length) {
          setDisplayedText((prev) => prev + text.charAt(index));
          index += 1;
          timeoutId = window.setTimeout(typeChar, speed);
        } else {
          setIsComplete(true);
        }
      };

      timeoutId = window.setTimeout(typeChar, speed);
    };

    startTimeoutId = window.setTimeout(startTyping, startDelay);

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
      if (startTimeoutId) window.clearTimeout(startTimeoutId);
    };
  }, [text, speed, startDelay]);

  return { displayedText, isComplete };
}
