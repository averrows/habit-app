/** @jsxImportSource @emotion/react */
import { HabitLog } from "../types/habits";
import { css } from "@emotion/react";
import { Button } from "./Button";
import { Modal } from "./Model";
import { useModal } from "../callbacks/useModal";
import { Api } from "../apis/Api";
import { useRef, useState } from "react";
export const HabitLogBox = (props?: HabitLogProps) => {
    const [isPopupOpen, togglePopup] = useModal();
    const [isAlertModalOpen, toggleAlertModal] = useModal();
    const [habitLog, setHabitLog] = useState<HabitLog | undefined>(props?.habitLog);
    const submit = async () => {
        if (habitLog === undefined){
            return;
        }
        habitLog.habitId = props?.habitId ?? 0;
        let response = await Api.habits.log(habitLog);
        if (props?.resyncHabit !== undefined){
            props?.resyncHabit();
        }
        togglePopup();
    }

    const self = this;

    const addLogHandler = async () => {
        let response = await Api.habits.checkDate(props?.habitId ?? 0);
        let isValid = response["data"] as boolean;
        console.log(isValid);
        if (isValid){
            togglePopup();
        } else {
            toggleAlertModal();
        }
    }
    return (
        <div css={css`
        width: 126px;
        height: 126px;
        flex-shrink: 0;
        border-radius: 36px;
        border: 1px solid #000;
        background: ${props?.bgColor ?? '#90C62C'} ;
        display: flex;
        justify-content: center;
        align-items: center;
    `}>
        <Modal isShowing={isPopupOpen}>
            <h1>Are you sure?</h1>
            <input type="text" onChange={(e) => {
                let newLog = {...habitLog} as HabitLog;
                newLog.description = e.target.value;
                setHabitLog(newLog);
            }} ></input>
            <Button onClick={togglePopup} text="Close"></Button>
            <Button onClick={submit} text="Submit"></Button>
        </Modal>
        <Modal isShowing={isAlertModalOpen}>
            <h1>You can't add log today</h1>
            <Button onClick={toggleAlertModal} text="Close"></Button>
        </Modal>
        {
            props?.habitLog === undefined ? 
            <Button onClick={addLogHandler} text="Add Log"></Button> : <p>
            {props?.habitLog?.description}
        </p>
        }
            
        </div >
    );
}

interface HabitLogProps {
    habitLog?: HabitLog;
    habitId: number;
    bgColor?: string;
    resyncHabit?: () => void;
}