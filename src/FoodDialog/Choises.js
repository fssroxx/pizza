import React from 'react';
import styled from 'styled-components';

const CursorPointer = `cursor: pointer`;

const Label = styled.label`
    ${CursorPointer}
`

const RadioInput = styled.input`
    ${CursorPointer}
`

export function Choices ({openFood, choiceRadio}) {
    return (
        <>
            <h2>Choose one</h2>
            {
                openFood.choices.map( choice => (
                    <>
                        <RadioInput
                            type="radio"
                            id={choice}
                            name="choice"
                            value={choice}
                            checked={choiceRadio.value === choice}
                            onChange={choiceRadio.onChange}
                        />
                        <Label for={choice}> {choice} </Label>
                    </>
                ))
            }
        </>
    );
}
