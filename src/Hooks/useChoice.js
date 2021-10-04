import {useState} from "react";

export function useChoice (defaultChoice) {
    const [value, setValue] = useState(defaultChoice);
    const onChange = (e) => {
        setValue(e.target.value)
    };
    return {
        value,
        onChange
    }
}
