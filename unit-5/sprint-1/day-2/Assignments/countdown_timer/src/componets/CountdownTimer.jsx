import React, { useEffect, useState } from 'react';
import './Counter.css';
import { getReamingtimeUntilMsTimestamp } from './utilis/CoutdownTimerutils';
const DefaultReaming = {
  Days: '',
  hours: '',
  minutes: '',
  seconds: '',
};
const CountdownTimer = ({ countdownTimestamapMs }) => {
  //1 useState
  const [timer, setTimer] = useState(DefaultReaming);

  //useEffect
  useEffect(() => {
    const Id = setInterval(() => {
      updatingTimer(countdownTimestamapMs);
    }, 1000);
    return () => clearTimeout(Id);
  }, [countdownTimestamapMs]);

  //updating Timer function
  function updatingTimer(countdown) {
    // console.log('hello channa');
    setTimer(getReamingtimeUntilMsTimestamp(countdown));
  }
  //destructuring
  const { Days, hours, minutes, seconds } = timer;

  return (
    <div className='counter'>
      <span>{Days}</span>
      <span>Days</span>
      <span>{hours}</span>
      <span>hours</span>
      <span>{minutes}</span>
      <span>minutes</span>
      <span>{seconds}</span>
      <span>seconds</span>
    </div>
  );
};

export default CountdownTimer;
