import React, { useReducer } from 'react';
import { Button } from '../../../Shared/SharedComponentPath';
import { CountEnum } from './ReducerType'
import { counterReducer } from './ReducerCounter';




function CounterComp() {

    const intialState = { count: 0 }
    const [state, dispatch] = useReducer(counterReducer, intialState);

    return (
        <div className='cover'>
            <div className="row">

                <div className="col-auto">

                    <Button
                        onClick={() => dispatch({ type: CountEnum.DEC, payload: 10 })}
                        styleClass={`btn_primary`}> DEC
                    </Button >
                </div>
                <div className="col-auto"><h1>{state.count}</h1></div>
                <div className="col-auto">
                    <Button
                        onClick={() => dispatch({ type: CountEnum.INC, payload: 10 })}
                        styleClass={`btn_primary`}> INC
                    </Button >

                </div>

                <div className="col-auto">

                    <Button
                        onClick={() => dispatch({ type: CountEnum.RESET, payload: 0 })}
                        styleClass={`btn_danger`}> RESET
                    </Button >

                   
                </div>

            </div>
        </div>
    )
}

export default CounterComp