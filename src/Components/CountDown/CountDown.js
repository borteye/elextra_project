import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import "./CountDown.css";

function CountDown() {

    const [timerDays, setTimerDays] = useState("00");
    const [timerHours, setTimerHours] = useState("00");
    const [timerMinutes, setTimerMinutes] = useState("00");
    const [timerSeconds, setTimerSeconds] = useState("00");

    let interval = useRef();

    const startTimer = () => {
        const countDownDate = new Date('December 05, 2022 00:00:00:00').getTime();

        interval = setInterval(() => {

            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (24 * 60 * 60 * 1000));
            const hours = Math.floor(distance % (24 * 60 * 60 * 1000) / (60 * 60 * 1000));
            const minutes = Math.floor(distance % (60 * 60 * 1000) / (60 * 1000));
            const seconds = Math.floor(distance % (60 * 1000) / (1000));

            if (distance < 0) {
                clearInterval(interval.current);
            }
            else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000)
    }

    let Dayss;

    function daysDay() {
        if (timerDays === 1) {
            Dayss = "Day"
        }
        else if (timerDays < 1) {
            Dayss = "Days"
        }
        else {
            Dayss = "Days"
        }

        return (
            <>
                {Dayss}
            </>
        )
    }

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        }
    })


    return (
        <>
            <div className="count_down">
                <div className="timer_container">
                    <div className="timer">
                        <p className="ends">Ends in</p>
                        <div className="days">
                            <p>{timerDays}
                                {daysDay()}
                            </p>
                        </div>
                        <span>:</span>
                        <div className="hours">
                            <p>{timerHours}h</p>
                        </div>
                        <span>:</span>
                        <div className="minutes">
                            <p>{timerMinutes}m</p>
                        </div>
                        <span>:</span>
                        <div className="seconds">
                            <p>{timerSeconds}s</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CountDown;