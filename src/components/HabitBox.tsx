/** @jsxImportSource @emotion/react */

import { Habit } from "../types/habits";
import { css } from '@emotion/react';
import { HabitLogBox } from "./HabitLogBox";
import { useEffect, useState } from "react";
import { Api } from "../apis/Api";

export const HabitBox = (props?: HabitBoxProps) => {
    const [habit, setHabit] = useState<Habit | undefined>(props?.habit)
    const [isUpdated, setIsUpdated] = useState(false)
    useEffect(() => {
        if (props?.habit === undefined && props?.habitId !== undefined) {
            Api.habits.get(props?.habitId).then((r) => {
                if (r !== undefined) {
                    console.log(r["data"])
                    setHabit(r["data"] as Habit)
                }
            })
        }
    }, [isUpdated])
    
    
    if (habit === undefined){
        return <></>
    }

    return <>
        <div>
            <h1>{habit.name}</h1>
            <div css={css`
          display: flex;
          gap: 10px;          
        `}>
                {habit.habit_logs?.map((v, i) => <HabitLogBox habitId={habit.ID ?? 0} key={i} habitLog={v} />)}
                <HabitLogBox resyncHabit={() => setIsUpdated(!isUpdated)} habitId={habit.ID ?? 0} bgColor="#fff"/>
            </div>
        </div>
    </>
}

interface HabitBoxProps {
    habit?: Habit;
    habitId?: number;
}