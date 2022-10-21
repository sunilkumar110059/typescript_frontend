import React, { Fragment } from 'react'
import User from './User'

function TS16() {
    return (
        <Fragment>
            <div className="cover bg2_5 px-3 border1 bordercolor2_4 mb-4">
                <div className="row">
                    <div className="col-auto py-1"> <h1>TS 10</h1></div>
                    <div className="col py-1 d-flex align-items-center">
                        <h2 className='color3_1'>useState Hook With Single Type Value</h2>
                    </div>

                    <div className="col-auto py-1 border_left1 bordercolor2_4 d-flex align-items-center"> TS 10</div>
                </div>
            </div>
            <div className='container'>

                <User />

            </div>
        </Fragment>
    )
}

export default TS16