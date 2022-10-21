import React, { useReducer } from 'react';
import { SuccessButton } from '../../../Shared/SharedComponentPath';
import { counterReducer } from './ReducerCounter';




function CounterComp() {

    const intialState = { count: 0 }
    const [state, dispatch] = useReducer(counterReducer, intialState);

    return (
        <div className='cover'>
            <div className="row">

                <div className="col-auto">
                    <SuccessButton
                        onClickHandle={() => dispatch({ type: "INCREMENT", payload: 10 })}
                        ButtonText='INC'
                    />
                </div>

                <div className="col-auto"><h1>{state.count}</h1></div>

                <div className="col-auto">
                    <SuccessButton
                        onClickHandle={() => dispatch({ type: "DECREMENT", payload: 10 })}
                        ButtonText='DEC'
                    />
                </div>

            </div>
        </div>
    )
}

export default CounterComp