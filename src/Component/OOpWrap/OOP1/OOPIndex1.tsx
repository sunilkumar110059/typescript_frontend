import React, { Fragment } from 'react'
import ConstructorFun from './ConstructorFun'

function OOPIndex1() {
    return (
        <Fragment>
            <div className="cover bg2_5 px-3 border1 bordercolor2_4 mb-4">
                <div className="row">
                    <div className="col py-1"> <h1>Construction Function </h1> </div>
                    <div className="col-auto py-1 border_left1 bordercolor2_4 d-flex align-items-center"> OOP 1 </div>
                </div>
            </div>
            <div className='container'>
                 <ConstructorFun /> 
            </div>
        </Fragment>
    )
}

export default OOPIndex1