import React from 'react';

const Timer = function(props) {

    const [time, setTime] = React.useState(0);
    
    React.useEffect(() => {

      let interval;

      if (props.start) {

        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        }, 10);

      } else if (!props.start) {

        clearInterval(interval);

      }

      if (props.reset) {
        setTime(0);
      }

      return () => clearInterval(interval);

    }, [props.start]);


    return (
      <div className="timer">
        <div className="timeNumber">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</span>:
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>:
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
      </div>
    );
};

export default Timer;