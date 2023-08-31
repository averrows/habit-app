/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const Modal = (props? : ModalProps) => {
    const modalWrapper = css`
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    right: 0px;
    left: 0px;
    background-color: rgba(107, 114, 128, 0.5);
    z-index: 9;
    width: 100vw;
    height: 100vh;
    `
    if (!props?.isShowing) return null

    return (
        <div css={modalWrapper}>
            {props.children}
        </div>
    );
}

interface ModalProps {
    children?: React.ReactNode;
    isShowing: boolean;
}