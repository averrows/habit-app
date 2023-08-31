import { Habit, HabitLog } from "../types/habits";

const API_URL = 'http://localhost:8000/api/v1';

export const Api = {
    // Submit Habit
    habits: {
        submit: async (habit: Habit) => {
            let result = await fetch( API_URL + '/habits', {
                method: 'POST',
                body: JSON.stringify(habit),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return result.json();
        } ,

        all: async () => {
            let result = await fetch( API_URL + '/habits', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return result.json();
        },
        get: async (id: number) => {
            let result = await fetch( API_URL + '/habits?' + new URLSearchParams({
                id: id.toString()
            }), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return result.json();
        },
        log: async (habitLog: HabitLog) => {
            console.log(habitLog);
            let result = await fetch( API_URL + '/habits/log', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    habit_id: habitLog.habitId,
                    description: habitLog.description,
                })
            })
            return result.json();
        },
        checkDate: async (habitId: number) => {
            let result = await fetch( API_URL + '/habits/log/check-date?' + new URLSearchParams({
                habitId: habitId.toString()
            }), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return result.json();
        }
    }
}