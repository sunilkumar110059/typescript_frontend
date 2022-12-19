import React, { useEffect, useState } from "react";
import { Button } from "../../../Shared/SharedComponentPath";


function Counter() {

    const [count, setCount] = useState<number>(0);

    const [timer, setTimer] = useState<number>(0);


    const startHandle = () => {
        setTimer(10);
    }

    const incHandle = () => {
        setCount(count + 1)
    }
    const decHandle = () => {
        if (count >= 1) {
            setCount(count - 1)
        }
    }

    const resetHandle = () => {
        setTimer(0)
        setCount(0)
    }

    useEffect(() => {
        if (timer === 0) {
            return
        }
        const interval = setInterval(() => {
            setTimer(timer - 1);
        }, 1000);

        return () => {
            clearInterval(interval)
        }

    }, [timer]);



    return (
        <div className="cover">
            <h1>Timer:{timer}</h1>
            <h1>Counter:{count}</h1>

            <div className="row">
                <div className="col-auto">
                    <Button
                        onClick={startHandle}
                        disabled={timer > 0}
                        styleClass={`btn_success`}> Start </Button>
                </div>
                <div className="col-auto">
                    <Button
                        disabled={timer === 0}
                        onClick={incHandle}
                        styleClass={`btn_primary`}> Inc Counter </Button>
                </div>

                <div className="col-auto">
                    <Button
                        disabled={timer === 0}
                        onClick={decHandle}
                        styleClass={`btn_secondary`}> Dec Counter </Button>
                </div>
                <div className="col-auto">
                    <Button
                        onClick={resetHandle}
                        styleClass={`btn_warning`}> Reset </Button>
                </div>
            </div>


        </div>
    );
}

export default Counter;
