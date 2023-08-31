/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

export const Button = (props: ButtonProps) => {
    const button = css `
    background: ${props.color ?? '#3882c2'} ;
    border-radius: 10px;
    color: #ffffff;
    text-align: center;
    font: 500 24px "Inter", sans-serif;
    `
    
    return <>
        <button onClick={props.onClick} css={button}>{props.text}</button>
    </>
}

interface ButtonProps {
    text: string;
    onClick?: () => void;
    color?: string;
}