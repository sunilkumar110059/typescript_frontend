import React, { useEffect, useState } from "react";
import { Button, Input } from "../../../Shared/SharedComponentPath";


const TimerStyle2 = () => {
    const [[h, m, s], setTimer] = useState([0, 0, 0]);
    const [isStarted, setIsStarted] = useState(false);

    useEffect(() => {
        const timerID = setInterval(() => onStart(), 1000);
        return () => {
            clearInterval(timerID);
        };
    });

    const onStart = () => {
        if (h === 0 && m === 0 && s === 0) {
            setIsStarted(false);
            return;
        }
        if (!isStarted) return;
        if (m === 0 && s === 0) {
            setTimer([h - 1, 59, 59]);
        } else if (s === 0) {
            setTimer([h, m - 1, 59]);
        } else {
            setTimer([h, m, s - 1]);
        }
    };

    const onReset = () => {
        setIsStarted(false);
        setTimer([0, 0, 0]);
    };

    return (
        <div className="wrapper mt-5">
            <div className="row align-items-end">
                <div className="col-auto">
                    < Input
                        labelText={'Hour'}
                        labelStyleClass={'d-block mb-1 fw-bold'}
                        formStyleClass={'border1 bordercolor2_4'}
                        inputStyleClass={'p-2 fs-4 fw-bolder'}
                        inputStyleId={'hourid'}
                        type={'number'}
                        value={h}
                        onChange={(e: any) => setTimer([e.target.value, m, s])}
                    />
                </div>


                <div className="col-auto">
                    < Input
                        labelText={'Minute'}
                        labelStyleClass={'d-block mb-1 fw-bold'}
                        formStyleClass={'border1 bordercolor2_4'}
                        inputStyleClass={'p-2 fs-4 fw-bolder'}
                        inputStyleId={'minuteid'}
                        type={'number'}
                        value={m}
                        onChange={(e: any) => setTimer([h, e.target.value, s])}
                    />
                </div>


                <div className="col-auto">
                    <Input
                        labelText={'Second'}
                        labelStyleClass={'d-block mb-1 fw-bold'}
                        formStyleClass={'border1 bordercolor2_4'}
                        inputStyleClass={'p-2 fs-4 fw-bolder'}
                        inputStyleId={'secondid'}
                        type={'number'}
                        value={s}
                        onChange={(e: any) => setTimer([h, m, e.target.value])}
                    />
                </div>

                <div className="col-auto">
                    {isStarted ? (
                        <Button styleClass="d-flex align-items-center btn_secondary cursor-pointer" onClick={() => setIsStarted(false)}>Pause</Button>
                    ) : (
                        <Button styleClass="d-flex align-items-center btn_success cursor-pointer"
                            onClick={() => setIsStarted(true)}
                            disabled={h === 0 && m === 0 && s === 0}
                        >
                            Start
                        </Button>
                    )}
                </div>

                <div className="col-auto"> <Button styleClass="d-flex align-items-center btn_warning cursor-pointer" onClick={onReset}>Reset</Button></div>
            </div>

        </div>
    );
};

export default TimerStyle2;
