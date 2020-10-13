import React, { useState, useEffect } from 'react';

import { Container } from './styles';

interface TimerCircleProps {
  name: string;
  time: number;
  size: number;
  progress: number;
  strokeWidth: number;
  circleOneStroke: string;
  circleTwoStroke: string;
}

const TimerCircle: React.FC<TimerCircleProps> = ({
  name,
  time,
  size,
  progress,
  strokeWidth,
  circleOneStroke,
  circleTwoStroke,
}) => {
  const [transition, setTransition] = useState(false);
  const [offset, setOffset] = useState(0);

  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);

    setTransition(true);
  }, [setOffset, progress, circumference, offset]);

  return (
    <Container transition={transition}>
      <svg className="svg" width={size} height={size}>
        <circle
          className="svg-circle-bg"
          stroke={circleOneStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          className="svg-circle"
          stroke={circleTwoStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
        <text x={`${center}`} y={`${center}`} className="svg-circle-text">
          <tspan x={`${center}`} y={`${center}`}>
            {time}
          </tspan>
          <tspan x={`${center}`} y={`${center + radius / 3}`}>
            {name}
          </tspan>
        </text>
      </svg>
    </Container>
  );
};

export default TimerCircle;
