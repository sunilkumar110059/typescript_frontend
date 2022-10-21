import React, { Fragment } from 'react'
import PersonList from './PersonList'

function TS3() {

    let personListArr = [
        {
            firstname: "Sunil",
            lastname: "Kumar",
            age: 36,
            education: "B.C.A",
            address: "E-35 Nanhey Park, Uttam Nagar, New Delhi -110059",
            phone : 9836478935
        },

        {
            firstname: "Anil",
            lastname: "Gupta",
            age: 42,
            education: "B.A",
            address: "DC-40 Jain Colony, New Delhi"
        },

        {
            firstname: "Ved",
            lastname: "Prakash",
            age: 36,
            education: "12th Pass",
            address: "D-56 Muthyani, Uttar Pardesh Dadri",
            phone : 9842354756
        },

        {
            firstname: "Lokinder",
            lastname: "Sagar",
            age: 45,
            education: "B.COM",
            address: "C-25 Muthyani, Uttar Pardesh Dadri"
        },

        {
            firstname: "Sumit",
            lastname: "Gautom",
            age: 24,
            education: "10th Pass",
            address: "M-31 Muthyani, Uttar Pardesh Dadri",
            phone : 9898743591
        }
    ]

    return (
        <Fragment>
            <div className="cover bg2_5 px-3 border1 bordercolor2_4 mb-4">
                <div className="row">
                    <div className="col-auto py-1"> <h1>TS 3 </h1></div>
                    <div className="col py-1 d-flex align-items-center">  <h2 className='color3_1'> Array Pass By Props</h2> </div>
                    <div className="col-auto py-1 border_left1 bordercolor2_4 d-flex align-items-center"> TS 3</div>
                </div>
            </div>

            <div className='container'>
                <PersonList
                    personListArr={personListArr}
                />
            </div>
        </Fragment>
    )
}

export default TS3