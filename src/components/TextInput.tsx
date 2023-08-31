/** @jsxImportSource @emotion/react */
import { HabitLog } from "../types/habits";
import { css } from "@emotion/react";

export const TextInput = (props: TextInputProps) => {

    const onTextChange = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        if (props.setText) {
            props.setText(e.currentTarget.value)
        }
    }

    return (
        <div>
            {props.label && <h2>{props.label}</h2>}
            <input onChange={onTextChange} type="text" css={css`
            width: 313px;
            height: 27px;
            flex-shrink: 0;
            fill: #FFF;
stroke-width: 1px;
stroke: #000; `} />
        </div>
    );
}

interface TextInputProps {
    label?: string;
    setText?: (text: string) => void;
}