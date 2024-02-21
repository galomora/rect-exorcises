import './counter-button.css';

const CounterButton = ({count, setCount}) => {
    const addCounter = () => {
        setCount ((count) => (count + 1));
    }
    
    const dimCounter = () => {
        setCount ((count) => (count + 1));
    }

    return (
        <div className="button-wrapper">
        <button onClick={dimCounter}>-</button>
        <div>{count}</div>
        <button onClick={addCounter}>+</button>
        </div>
    );
}

export default CounterButton;