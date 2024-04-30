import React from "react";
import CountUp from "react-countup";
import styles from "./CountUpComp.module.scss";
import { Container } from "@mui/material";
import CounterBox from "Components/CounterBox/CounterBox";

const CountUpComp = () => {
  return (
    <Container>
      <div className={styles.counter_wrapper}>

          <div className={styles.counter_wrapper_boxes}>
            <CounterBox start={0} end={1600} duration={2.75} text='apartments sold  thanks to us'/>
            <CounterBox start={0} end={3} duration={3} text='cities in which we promote developers'/>
          </div>

          <div className={styles.counter_wrapper_boxes}>
            <CounterBox start={0} end={3} duration={2.75} text='awards received at festivals'/>
            <CounterBox start={0} end={14} duration={2.75} text='residential complexes in promoting'/>
          </div>

      </div>
    </Container>
  );
};

export default CountUpComp;
