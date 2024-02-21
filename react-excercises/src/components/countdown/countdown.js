import { useState, useEffect, useRef } from "react";

const Countdown = () => {

    const [minutes, setMinutes] = useState (0);
    const [seconds, setSeconds] = useState (0);
    const [startFlag, setStartFlag] = useState (false);
    const intervalId = useRef();

    console.log('rendering');

    const updateMinutes = (event) => {
        console.log ('update minutes');
        setMinutes (event.target.value);
    }

    const startCount = () => {
        console.log ('start count');
        setSeconds (60 * minutes);
        setStartFlag (true);
    }

    const resetCount = () => {
        console.log ('reset count');
        setSeconds (60 * minutes);
        setStartFlag (true);
    }

    const pauseCount = () => {
        if (startFlag) {
            clearInterval (intervalId.current);
            setStartFlag (false);
        } else {
            setStartFlag (true);
        }
    }

    useEffect (() => {
        if (! startFlag) {return;}
        console.log ('usestate startflag');
        intervalId.current = setInterval ( () => {setSeconds((seconds) => seconds -1)}, 1000)
        return (() => {clearInterval (intervalId.current)})
    }, [startFlag]
    );

    useEffect (() => {
        if (seconds === 0) {
            clearInterval (intervalId.current);
        }
    }, [seconds]
    );

    useEffect ((startFlag) => {
        if (startFlag) {
            clearInterval (intervalId.current);
            setStartFlag (false);
            setSeconds (0);
        }
    }, [minutes]
    );







    return (
        <div>

        
        <h2>Countdown</h2>
        <div>
            <label>Minutes</label>
            <input type={'text'} onChange = {updateMinutes}></input>
            <button onClick={startCount}>Start</button>
            <button onClick={resetCount}>Reset</button>
            <button onClick={pauseCount}>Pause</button>
        </div>
        <div><label>Countdown: </label>
            <span>{seconds}</span>
        </div>
        
        </div>
    );
}

export default Countdown;