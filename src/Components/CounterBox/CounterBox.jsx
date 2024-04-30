import React from "react";
import CountUp from "react-countup";
import styles from './CounterBox.module.scss'

const CounterBox = ({start, end, duration, text}) => {
    if (!text) return null;

    const textParts = text.split(" ");
    const firstWord = textParts.shift();
    
  return (
    <div className={styles.counter_wrapper_boxes_box}>
    <h1>
      <CountUp start={0} end={end} duration={duration} />
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
