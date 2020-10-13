/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, { useEffect, useState, useCallback } from 'react';

import { Title, Container } from './styles';

import TimerCircle from '../../components/TimerCircle';

const Countdown: React.FC = () => {
  const totalTime = 10;
  const totalDays = Math.floor(totalTime / 3600 / 24);
  const totalHours = Math.floor((totalTime / 3600) % 24);
  const totalMinutes = Math.floor((totalTime % 3600) / 60);
  const totalSeconds = Math.floor((totalTime % 3600) % 60);
  const [timeRemaining, setTimeRemaining] = useState(totalTime);
  const [seconds, setSeconds] = useState(totalSeconds);
  const [minutes, setMinutes] = useState(totalMinutes);
  const [hours, setHours] = useState(totalHours);
  const [days, setDays] = useState(totalDays);

  const decrementTime = useCallback(() => {
    if (timeRemaining > 0) {
      setTimeRemaining(timeRemaining - 1);
    }
    setDays(Math.floor(timeRemaining / 3600 / 24));
    setHours(Math.floor((timeRemaining / 3600) % 24));
    setMinutes(Math.floor((timeRemaining % 3600) / 60));
    setSeconds(Math.floor((timeRemaining % 3600) % 60));
  }, [timeRemaining]);

  useEffect(() => {
    const interval = setInterval(() => {
      decrementTime();
    }, 1000);
    return () => clearInterval(interval);
  }, [decrementTime]);

  return (
    <>
      <Title>Contador</Title>
      <Container>
        <TimerCircle
          time={days}
          name="dias"
          progress={
            totalDays > 0 ? Math.floor((timeRemaining / totalTime) * 100) : 0
          }
          size={200}
          strokeWidth={15}
          circleOneStroke="#d9edfe"
          circleTwoStroke="#ed004f"
        />
        <TimerCircle
          time={hours}
          name="horas"
          progress={Math.floor(((hours % 24) / 24) * 100)}
          size={200}
          strokeWidth={15}
          circleOneStroke="#d9edfe"
          circleTwoStroke="#ed004f"
        />
        <TimerCircle
          time={minutes}
          name="minutos"
          progress={Math.floor(((minutes % 60) / 60) * 100)}
          size={200}
          strokeWidth={15}
          circleOneStroke="#d9edfe"
          circleTwoStroke="#ed004f"
        />
        <TimerCircle
          time={seconds}
          name="segundos"
          progress={Math.floor(((timeRemaining % 60) / 60) * 100)}
          size={200}
          strokeWidth={15}
          circleOneStroke="#d9edfe"
          circleTwoStroke="#ed004f"
        />
      </Container>
    </>
  );
};

export default Countdown;
