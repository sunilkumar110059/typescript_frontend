import React, { Fragment } from 'react'
import UserDetail from './UserDetail'

function TS13() {
    return (
        <Fragment>
          <div className="cover bg2_5 px-3 border1 bordercolor2_4 mb-4">
                <div className="row">
                    <div className="col-auto py-1"> <h1>TS 13</h1></div>
                    <div className="col py-1 d-flex align-items-center">
                        <h2 className='color3_1'>useState Hook With Object and Null Type, but Need be of "?" Optional Chaining </h2>
                    </div>
                    <div className="col-auto py-1 border_left1 bordercolor2_4 d-flex align-items-center"> TS 13</div>
                </div>
            </div>

            <div className='container'>
                <UserDetail />
            </div>
        </Fragment>
    )
}

export default TS13