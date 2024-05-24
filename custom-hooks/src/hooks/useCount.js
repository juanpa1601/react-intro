import { useState } from "react";

function useCount (initialState) {
    const [count, setCount] = useState(initialState);

    const handleAdd = () => setCount(count + 1);
    const handleRestart = () => setCount(0);
    const handleReduce = () => setCount(count - 1)
    return [count, handleAdd, handleRestart, handleReduce]
}

export default useCount;