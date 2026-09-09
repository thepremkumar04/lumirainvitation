import { useEffect, useState } from "react";

export default function Typewriter({
  words = [],
  typingSpeed = 90,
  deletingSpeed = 50,
  pauseTime = 1800,
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;

    const currentWord = words[wordIndex];

    let timer;

    if (!deleting && text.length < currentWord.length) {
      timer = setTimeout(() => {
        setText(
          currentWord.substring(
            0,
            text.length + 1
          )
        );
      }, typingSpeed);
    }

    else if (
      !deleting &&
      text.length === currentWord.length
    ) {
      timer = setTimeout(() => {
        setDeleting(true);
      }, pauseTime);
    }

    else if (
      deleting &&
      text.length > 0
    ) {
      timer = setTimeout(() => {
        setText(
          currentWord.substring(
            0,
            text.length - 1
          )
        );
      }, deletingSpeed);
    }

    else if (
      deleting &&
      text.length === 0
    ) {
      setDeleting(false);

      setWordIndex(
        (prev) =>
          (prev + 1) % words.length
      );
    }

    return () => clearTimeout(timer);
  }, [
    text,
    deleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return (
    <span className="typewriter">
      {text}
      <span className="typewriter-cursor">
        |
      </span>
    </span>
  );
}