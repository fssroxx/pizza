import {useState} from "react";

export const useMadeBy = () => {
    const [display, setDisplay] = useState('none');
    return {
        display,
        setDisplay
    }
}