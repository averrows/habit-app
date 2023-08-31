/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

export const TimeBullet = (props? : TimeBulletProps) => {
    const diameter = "40px";
    const roundOn = css`
        width: ${diameter};
        height: ${diameter};
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: 1px solid #000;
        background: #90C62C;
    `;

    const roundOff = css`
        width: ${diameter};
        height: ${diameter};
        flex-shrink: 0;
        border-radius: 50%;
        align-items: center;
        display: flex;
        justify-content: center;
        border: 1px solid #000;
        background: #E5E7EB;
    `

    return <>
        <div onClick={props?.toggle} css={props?.isSelected ? roundOn : roundOff}>
            <p style={{
                userSelect: "none",
            }}>{props?.time}</p>
        </div>
    </>
}

interface TimeBulletProps {
    time: string;
    isSelected: boolean;
    toggle: () => void;
}