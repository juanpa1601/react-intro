import { useState } from "react";

function useToggle(initialState) {
    const [active, setActive] = useState(initialState);

    const handleToggle = () => setActive(!active);
    const handleActive = () => setActive(true);
    const handleInactive = () => setActive(false);
    return [active,handleToggle,handleActive,handleInactive]
}

export default useToggle;