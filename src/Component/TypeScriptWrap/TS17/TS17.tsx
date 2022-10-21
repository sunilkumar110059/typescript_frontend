import React, { Fragment } from 'react'
import CounterComp from './CounterComp'

function TS17() {
    return (
        <Fragment>
            <div className="cover bg2_5 px-3 border1 bordercolor2_4 mb-4">
                <div className="row">
                    <div className="col-auto py-1"> <h1>TS 17</h1></div>
                    <div className="col py-1 d-flex align-items-center">
                        <h2 className='color3_1'>useReducer Hook Strict, With Union String Literal  </h2>
                    </div>
                    <div className="col-auto py-1 border_left1 bordercolor2_4 d-flex align-items-center"> TS 17</div>
                </div>
            </div>

            <div className='container'>
                <CounterComp />
            </div>
        </Fragment>
    )
}

export default TS17