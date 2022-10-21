import React, { Fragment } from 'react'
import Person from './Person'
import PersonList from './PersonList';
import { UserData } from './UserArray'

const UserObjByProps = {
    id: 8,
    name: "ByProps Leanne Graham",
    username: "ByProps Bret",
    email: "Sincere@april.biz",
    phone: 981234576,
    website: "ByProps hildegard.org",
    isLogin: true
}


function TS9() {
    return (
        <Fragment>
            <div className="cover bg2_5 px-3 border1 bordercolor2_4 mb-4">
                <div className="row">
                    <div className="col-auto py-1"> <h1>TS 9</h1></div>
                    <div className="col py-1 d-flex align-items-center">  <h2 className='color3_1'>Export Types and Types Can Reuse Different File</h2> </div>
                    <div className="col-auto py-1 border_left1 bordercolor2_4 d-flex align-items-center"> TS 9</div>
                </div>
            </div>

            <div className='container'>
                <Person
                    UserObjByProps={UserObjByProps}
                />

                <PersonList
                    UserList={UserData}
                />
            </div>
        </Fragment>
    )
}

export default TS9