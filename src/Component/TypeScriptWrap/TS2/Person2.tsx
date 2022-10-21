import React from 'react'


type Person2Props = {
    personObj: {
        firstname: string;
        lastname: string;
        age?: number;
        education: string;
        address?: string
    }
}

function Person2(props: Person2Props) {
    const { personObj } = props
    const { firstname, lastname, age, education, address } = personObj
    return (
        <div className='cover border1 bordercolor2_4'>
            <div className='row border_bottom1 bordercolor2_4 g-0'>
                <div className="col-1 p-2 border_right1 bordercolor2_4 fw-bold">First Name</div>
                <div className="col fw-bold color3_1 p-2">{firstname}</div>
            </div>

            <div className='row border_bottom1 bordercolor2_4 g-0'>
                <div className="col-1 p-2 border_right1 bordercolor2_4 fw-bold">Last Name</div>
                <div className="col fw-bold color3_1 p-2">{lastname}</div>
            </div>

            <div className='row border_bottom1 bordercolor2_4 g-0'>
                <div className="col-1 p-2 border_right1 bordercolor2_4 fw-bold">Age</div>
                <div className="col fw-bold color3_1 p-2">{age}</div>
            </div>
            <div className='row border_bottom1 bordercolor2_4 g-0'>
                <div className="col-1 p-2 border_right1 bordercolor2_4 fw-bold">Education</div>
                <div className="col fw-bold color3_1 p-2">{education}</div>
            </div>

             <div className='row g-0'>
                <div className="col-1 p-2 border_right1 bordercolor2_4 fw-bold">Education</div>
                <div className="col fw-bold color3_1 p-2">{address}</div>
            </div>
        </div>

    )
}

export default Person2