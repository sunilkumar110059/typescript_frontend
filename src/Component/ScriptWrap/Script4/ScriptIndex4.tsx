import React, { Fragment } from 'react';
import Timer from './Timer';
import TimerStyle2 from './TimerStyle2';
function ScriptIndex4() {
    return (
        <Fragment>
            <div className="cover bg2_5 px-3 border1 bordercolor2_4 mb-4">
                <div className="row">
                    <div className="col py-1"> <h1>Timer </h1> </div>
                    <div className="col-auto py-1 border_left1 bordercolor2_4 d-flex align-items-center"> Script 4 </div>
                </div>
            </div>
            <div className='container'>
                <Timer />
                <TimerStyle2 />
            </div>
        </Fragment>
    )
}
export default ScriptIndex4
