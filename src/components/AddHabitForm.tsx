import { useState } from "react";
import { Button } from "./Button"
import { TextInput } from "./TextInput"
import { Api } from "../apis/Api";
import { Habit } from "../types/habits";
import { useModal } from "../callbacks/useModal";
import { Modal } from "./Model";
import { TimeBullet } from "./TimeBullet";
import { useTimeTable } from "../callbacks/useTimeTable";

export const AddHabitForm = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [timeType, setTimeType] = useState<"day" | "month">("day");

    const [isPopupOpen, togglePopup] = useModal();
    const timeTable = useTimeTable(timeType);

    const submit = async () => {
        let habit: Habit = {
            name: title,
            description: description,
            time_type: timeType,
            time_table: timeTable.map((timeBullet) => {
                return timeBullet.isSelected ? 1 : 0;
            }).join(","),
        }
        let response = await Api.habits.submit(habit);
        togglePopup();
    }

    return <div style={{
        display: "flex",
        flexDirection: "column",
    }}>
        <Modal isShowing={isPopupOpen}>
            <h1>Are you sure?</h1>
            <Button onClick={togglePopup} text="Close"></Button>
            <Button onClick={submit} text="Submit"></Button>
        </Modal>
        <TextInput setText={setTitle} label="Title"></TextInput>
        <TextInput setText={setDescription} label="Description"></TextInput>
        <select onChange={(e) => setTimeType(e.target.value as "day" | "month")}>
            <option value="day">Day</option>
            <option value="month">Month</option>
        </select>
        <div style={{
            display: "flex",
        }}>
        {
            timeTable.map((timeBullet, index) => {
                return <TimeBullet time={timeBullet.time} isSelected={timeBullet.isSelected} toggle={timeBullet.toggle}></TimeBullet>
            })
        }
        </div>
        
        <Button onClick={togglePopup} text="Add Habit"></Button>
    </div>
}