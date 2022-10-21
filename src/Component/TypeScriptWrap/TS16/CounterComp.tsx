import React, { useReducer } from 'react';
import { DangerButton, SuccessButton } from '../../../Shared/SharedComponentPath';
import { CountEnum } from './ReducerType'
import { counterReducer } from './ReducerCounter';




function CounterComp() {

    const intialState = { count: 0 }
    const [state, dispatch] = useReducer(counterReducer, intialState);

    return (
        <div className='cover'>
            <div className="row">

                <div className="col-auto">
                    <SuccessButton
                        onClickHandle={() => dispatch({ type: CountEnum.DEC, payload: 10 })}
                        ButtonText='DEC'
                    />
                </div>
                <div className="col-auto"><h1>{state.count}</h1></div>
                <div className="col-auto">
                    <SuccessButton
                        onClickHandle={() => dispatch({ type: CountEnum.INC, payload: 10 })}
                        ButtonText='INC'
                    />
                </div>

                <div className="col-auto">
                    <DangerButton
                        onClickHandle={() => dispatch({ type: CountEnum.RESET, payload: 0 })}
                        ButtonText='RESET'
                    />
                </div>

            </div>
        </div>
    )
}

export default CounterComp