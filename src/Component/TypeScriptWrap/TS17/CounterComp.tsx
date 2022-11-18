import React, { useReducer } from 'react';
import { Button } from '../../../Shared/SharedComponentPath';
import { CountEnum } from './EnumType'
import { counterReducer } from './ReducerCounter';
function CounterComp() {

    const intialState = { count: 0 }
    const [state, dispatch] = useReducer(counterReducer, intialState);

    return (
        <div className='cover'>

            <div className="row">
                <div className="col-12 mb-3">
                    {(state.count >= 0 && state.count <= 39) && <h1> Carry On</h1>}
                    {(state.count >= 40 && state.count <= 65) && <h1> Good</h1>}
                    {(state.count >= 66 && state.count <= 80) && <h1>Very Good</h1>}
                    {(state.count >= 81 && state.count <= 99) && <h1>Excellent</h1>}
                    {(state.count >= 100) && <h1>Great</h1>}

                </div>

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