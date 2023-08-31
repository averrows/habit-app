export interface HabitLog {
    ID: number;
    habitId: number;
    date: Date;
    description: string;
    subDescription1: string;
    subDescription2: string;
}

export interface Habit {
    ID?: number;
    name: string;
    description: string;
    time_type: string;
    time_table: string;
    habit_logs?: HabitLog[];
}