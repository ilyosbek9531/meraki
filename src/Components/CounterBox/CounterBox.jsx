import React, { useState } from "react";
import CountUp from "react-countup";
import styles from "./CounterBox.module.scss";
import ScrollTrigger from "react-scroll-trigger";

const CounterBox = ({ end, duration, text, borderRadius, textEditions }) => {
  const [counterOn, setCounterOn] = useState(false);
  if (!text) return null;

  const textParts = text.split(" ");
  const firstWord = textParts.shift();

  return (
    <div className={styles.box} style={{ borderRadius: borderRadius }}>
      <h1>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          {counterOn && <CountUp start={0} end={end} duration={duration} />}
          <span className={styles.textEdition}>{textEditions}</span>
        </ScrollTrigger>
      </h1>
      <p>
        <span className="redLetters">{firstWord}</span>{" "}
        {textParts.map((part, index) => (
          <span key={index}>{part} </span>
        ))}
      </p>
    </div>
  );
};

export default CounterBox;
