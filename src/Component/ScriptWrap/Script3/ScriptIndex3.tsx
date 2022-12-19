import React, { Fragment } from 'react';
import Counter from './Counter';

function ScriptIndex3() {
    return (
        <Fragment>
            <div className="cover bg2_5 px-3 border1 bordercolor2_4 mb-4">
                <div className="row">
                    <div className="col py-1"> <h1>Counter disable and enable according to condition </h1> </div>
                    <div className="col-auto py-1 border_left1 bordercolor2_4 d-flex align-items-center"> Script 3 </div>
                </div>
            </div>
            <div className='container'>
                
                <Counter/>
            </div>
        </Fragment>
    )
}

export default ScriptIndex3