import React, { Fragment } from 'react'
import Person2 from './Person2'

function TS2() {

    let personObj = {
        firstname: "Sunil",
        lastname: "Kumar",
        age: 36,
        education: "B.C.A",
        address: "E-35 Nanhey Park, Uttam Nagar, New Delhi -110059"
    }


    return (
        <Fragment>
            <div className="cover bg2_5 px-3 border1 bordercolor2_4 mb-4">
                <div className="row">
                    <div className="col-auto py-1"> <h1>TS 2 </h1></div>
                    <div className="col py-1 d-flex align-items-center">  <h2 className='color3_1'> Object Pass By Props</h2> </div>
                    <div className="col-auto py-1 border_left1 bordercolor2_4 d-flex align-items-center"> TS 2</div>
                </div>
            </div>

            <div className='container'>
                <Person2 personObj={personObj} />
            </div>
        </Fragment>
    )
}

export default TS2