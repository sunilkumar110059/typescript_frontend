import React, { useState, useEffect, useRef } from 'react'
import { Button } from '../../../Shared/SharedComponentPath'

function MutableRef() {
    const interValRef = useRef<number | undefined>(undefined)

    const [timer, setTimer] = useState(0)

    const stopTimer = () => {
        window.clearInterval(interValRef.current)
    }

    useEffect(() => {
        interValRef.current = window.setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)

        return () => {
            stopTimer()
        }
    }, [])


    return (
        <div className='cover mt-5'>
            <div className="row">
                <div className="col-12"><h1>{timer}</h1></div>
                <div className="col-auto">
                    <Button
                        onClick={() => stopTimer()}
                        styleClass={`btn_primary`}> Stop Timer
                    </Button >
                </div>
            </div>

        </div>

    )
}

export default MutableRef