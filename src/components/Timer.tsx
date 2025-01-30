import React from 'react';

interface TimerProps {
  time: Date;
}

const Timer: React.FC<TimerProps> = ({ time }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <p>Last Updated: {time.toLocaleTimeString()}</p>
    </div>
  );
};

export default Timer;