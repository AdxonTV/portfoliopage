import React, { useEffect, useRef } from "react";

const letters = "&1$*01_____";

interface MyComponentProps {
  texy: string;
  start: boolean;
}

const TextAppear: React.FC<MyComponentProps> = ({ texy, start }) => {
  const nameRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const name = nameRef.current;

    if (!name || !start) return;

    const handleTextAnimation = () => {
      let iteration = -1;

      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      intervalRef.current = setInterval(() => {
        const textValue = name.dataset.value as string; // Assert the type here

        if (!textValue) return; // Ensure textValue is defined

        const animatedText = textValue
          .split("")
          .map((_, index) => {
            // Return the original character if we've reached that index
            if (index < iteration) {
              return textValue[index]; // Use the textValue variable here
            }
            // Return a random character otherwise
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("");

        name.innerText = animatedText; // Update the displayed text
        iteration += 1 / 4;

        if (iteration >= textValue.length) {
          clearInterval(intervalRef.current!);
        }
      }, 7);
    };

    handleTextAnimation();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [start, texy]);

  return (
    <div className="screen">
      <div
        ref={nameRef}
        className="name text-[#000000] w-[3.5vw] h-fit"
        data-value={texy}
      >
        {texy}
      </div>
    </div>
  );
};

export default TextAppear;
