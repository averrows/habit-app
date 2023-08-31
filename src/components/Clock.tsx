import { useEffect, useState } from "react";

export const Clock = () => {
    const [time, setTime] = useState({
        date: new Date().toDateString(),
        minutes: new Date().getMinutes(),
        hours: new Date().getHours(),
        seconds: new Date().getSeconds()
    })

    useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date();
            setTime({
                date: date.toDateString(),
                minutes: date.getMinutes(),
                hours: date.getHours(),
                seconds: date.getSeconds()
            })
        }, 1000)

        return () => clearInterval(intervalId);
    }, [])

    const convertToTwoDigit = (number: number) => {
        return number.toLocaleString('en-US', {
            minimumIntegerDigits: 2
        })
    }

    return (
        <div>
            <h1 style={{
                fontSize: "124px",
            }}>
                <span>{convertToTwoDigit(time.hours)}:</span>
                <span>{convertToTwoDigit(time.minutes)}:</span>
                <span>{convertToTwoDigit(time.seconds)}</span>
            </h1>
        </div>
    );
}