/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { HabitLogBox } from './components/HabitLogBox';
import { Habit, HabitLog } from './types/habits';
import { css } from '@emotion/react';
import { HabitBox } from './components/HabitBox';
import { TextInput } from './components/TextInput';
import { Button } from './components/Button';
import { AddHabitForm } from './components/AddHabitForm';
import { Modal } from './components/Model';
import { Clock } from './components/Clock';
import { Api } from './apis/Api';

function App() {
  const [habits, setHabits] = React.useState<Habit[]>([]);

  let habitLog: HabitLog = {
    ID: 1,
    habitId: 1,
    description: "Test",
    subDescription1: "Test",
    subDescription2: "Test",
    date: new Date(),
  }

  let v: HabitLog[] = Array(7).fill(habitLog);
  let habit: Habit = {
    ID: 1,
    name: "Test",
    description: "Test",
    habit_logs: v,
    time_type: "Daily",
    time_table: "Morning"
  }
  useEffect(() => {
    Api.habits.all().then((h) => {
      if (h !== undefined){
        setHabits(h);
      }
    })
  }, [])
  return (
    <div css={css`
    width: 100%;
    height: 2829px;
    background: linear-gradient(180deg, #FFF 0%, #F9C739 100%);
    `}>
      <div css={css`
        width: 70%;
        margin: 0 auto;
      `}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <AddHabitForm/>
          <Clock/>
        </div>
        {
          habits.map((habit) => {
            return <HabitBox habitId={habit.ID}/>
          })
        }
      </div>

    </div>

  );
}

export default App;
