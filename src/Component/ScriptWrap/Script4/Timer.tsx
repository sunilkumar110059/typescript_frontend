import React, { useEffect, useState } from "react";
import { Button } from "../../../Shared/SharedComponentPath";
import ClockComp from "./ClockComp";


function Timer() {
    const [TimeState, SetTimeFn] = useState({
        hour: 0,
        min: 0,
        sec: 0
    })
    const { hour, min, sec } = TimeState
    const [IsStart, IsStartFn] = useState(false)

    const timeHandler = (elem: string) => {
        if (elem === 'HOUR_PLUS') {
            SetTimeFn({ ...TimeState, hour: hour + 1 })
        }
        else if (elem === 'HOUR_MINUS' && hour > 0) {
            SetTimeFn({ ...TimeState, hour: hour - 1 })
        }
        else if (elem === 'MINUTE_PLUS') {
            SetTimeFn({ ...TimeState, min: min + 1 })
        }
        else if (elem === 'MINUTE_MINUS' && sec > 0) {
            SetTimeFn({ ...TimeState, min: min - 1 })
        }
        else if (elem === 'SECOND_PLUS') {
            SetTimeFn({ ...TimeState, sec: sec + 1 })
        }
        else if (elem === 'SECOND_MINUS' && sec > 0) {
            SetTimeFn({ ...TimeState, sec: sec - 1 })
        }
    }

    const timeStart = () => {
        if (hour === 0 && min === 0 && sec === 0) {
            IsStartFn(false);
            return
        }
        else if (min === 0 && sec === 0) {
            SetTimeFn({
                hour: hour - 1,
                min: 59,
                sec: 59,
            })
        }
        else if (sec === 0) {
            SetTimeFn({
                ...TimeState,
                min: min - 1,
                sec: 59,
            })

        } else {
            SetTimeFn({
                ...TimeState,
                sec: sec - 1,
            })
        }
    }


    useEffect(() => {
        if (IsStart === false) return
        const timerID = setInterval(() => timeStart(), 1000);
        return () => {
            clearInterval(timerID);
        };
    }, [timeStart, IsStart]);


    const resetHandler = () => {
        SetTimeFn({
            hour: 0,
            min: 0,
            sec: 0
        })
        IsStartFn(false);
    }


    return (
        <div className="cover">
            <div className="row justify-content-center">

                <ClockComp
                    timeHandler={timeHandler}
                    TIME_HEADING={'HOUR'}
                    PLUS_ARG={`HOUR_PLUS`}
                    MINUS_ARG={'HOUR_MINUS'}
                    TIME={hour}
                />


                <ClockComp
                    timeHandler={timeHandler}
                    TIME_HEADING={'MINUTE'}
                    PLUS_ARG={`MINUTE_PLUS`}
                    MINUS_ARG={'MINUTE_MINUS'}
                    TIME={min}
                />

                <ClockComp
                    timeHandler={timeHandler}
                    TIME_HEADING={'SECOND'}
                    PLUS_ARG={`SECOND_PLUS`}
                    MINUS_ARG={'SECOND_MINUS'}
                    TIME={sec}
                />
            </div>

            <div className="row justify-content-center mt-5">
                <div className="col-auto">
                    {IsStart ?
                        (<Button styleClass="d-flex align-items-center btn_secondary cursor-pointer fs-3" onClick={() => IsStartFn(false)}> Pause</Button>)
                        : (<Button styleClass="d-flex align-items-center btn_success cursor-pointer fs-3"
                            disabled={hour === 0 && min === 0 && sec === 0}
                            onClick={() => IsStartFn(true)}> Start</Button>)
                    }

                </div>
                <div className="col-auto">
                    <Button styleClass="d-flex align-items-center btn_warning cursor-pointer fs-3" onClick={() => resetHandler()}> Reset</Button>
                </div>
            </div>

        </div>
    );
}

export default Timer