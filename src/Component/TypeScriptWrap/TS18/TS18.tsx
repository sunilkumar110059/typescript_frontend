import React, { Fragment } from 'react';
import ContextApi from './ContextApi';
import GetUser from './GetUser';


function TS18() {
    return (
        <ContextApi>
            <div className="cover bg2_5 px-3 border1 bordercolor2_4 mb-4">
                <div className="row">
                    <div className="col-auto py-1"> <h1>TS 18</h1></div>
                    <div className="col py-1 d-flex align-items-center">
                        <h2 className='color3_1'>Context API With Data</h2>
                    </div>
                    <div className="col-auto py-1 border_left1 bordercolor2_4 d-flex align-items-center"> TS 18</div>
                </div>
            </div>
            <div className='container'>
                <GetUser />
            </div>

        </ContextApi>
    )
}

export default TS18