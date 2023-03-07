const addCounter = (count, setCount) => {
    setCount (count + 1);
}

const dimCounter = (count, setCount) => {
    setCount (count - 1);
}

const CounterButton = ({count, setCount}) => {
    return (
        <div>
            <span onClick={dimCounter}>-</span>
            <span>${count}</span>
            <span onClick={addCounter}>+</span>
        </div>
    );
}

export default CounterButton;