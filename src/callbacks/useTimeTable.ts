import { useEffect, useState } from "react";

const Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"];
const Days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const useTimeTable = (type: "day" | "month") : TimeTableItem[] => {
    let timeTable: string[] = []
    if (type === "day") {
        timeTable = Days
    } else if (type === "month") {
        timeTable = Months
    }

    const [isSelectedTable, setIsSelectedTable] = useState<boolean[]>([]);

    useEffect(() => {
        setIsSelectedTable(timeTable.map(() => true));
    }, [type])
    
    const toggleTableAt = (index: number) => {
        const newIsSelectedTable = isSelectedTable.map((value, i) => {
            if (i === index) {
                return !value
            } else {
                return value
            }
        })
        setIsSelectedTable(newIsSelectedTable);
    }

    return timeTable.map((value, index) => {
        return {
            time: value,
            isSelected: isSelectedTable[index],
            toggle: () => toggleTableAt(index)
        }
    })
}

export interface TimeTableItem {
    time: string;
    isSelected: boolean;
    toggle: () => void;
}