
import { useState, useEffect } from 'react';
import CounterButton from '../../components/counter-button/counter-button.component';

const CounterButtonRoute = () => {

  const [counter, setCounter] = useState (0);
  
  useEffect ( () => {
    console.log ("init counter");
    setCounter (0);
  }, []);

  return (
    <div className="App">
      <CounterButton count={counter} setCount={setCounter}/>
    </div>
  );
}

export default CounterButtonRoute;
