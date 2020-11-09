import React, {useState} from 'react';

const Counter:React.FC = () => {
    const [count, setCount] = useState(0);
    //전 상태를 가져와서 하는 것이 더 좋다.
    const increase = () => setCount(prev => prev+1);
    const decrease = () => setCount(prev => prev-1);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
        </div>
    );
};

export default Counter;