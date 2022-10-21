import React, { Fragment } from 'react'
import Heading from './Heading'
import Oscar from './Oscar'

function TS5() {
    return (
        <Fragment>
            <div className="cover bg2_5 px-3 border1 bordercolor2_4 mb-4">
                <div className="row">
                    <div className="col-auto py-1"> <h1>TS 5 </h1></div>
                    <div className="col py-1 d-flex align-items-center">  <h2 className='color3_1'>Children Pass By Props</h2> </div>
                    <div className="col-auto py-1 border_left1 bordercolor2_4 d-flex align-items-center"> TS 5</div>
                </div>
            </div>

            <div className='container'>
                <Heading>
                
                Heading Place Holder Text Show by "Heading" Children props
                </Heading>

                <Oscar>                
                    <Heading> Sub Heading Text Show by "Heading" Children props </Heading>
                    <div> Oscar Componet Place Holder Text Show by "Oscar" Children props</div>
                </Oscar>

            </div>
        </Fragment>
    )
}

export default TS5