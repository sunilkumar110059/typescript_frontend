import React, { useState } from 'react';
import { Button } from '../../../Shared/SharedComponentPath';


function User() {
    const [isLogin, SetIsLogin] = useState<boolean>(false)

    const loginHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log("Event currentTarget===", event.currentTarget)
        SetIsLogin(true)
    }

    const logOutHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log("Event Target===", event.target)
        SetIsLogin(false)
    }

    return (
        <div className='cover'>
            <div className="row">
                <div className="col-12 mb-4">
                    {isLogin ? <h1 className='color4_1'>User Login</h1> : <h1 className='color3_1'>User Logout</h1>}
                </div>
                <div className="col-auto">

                    <Button
                        onClick={(event) => loginHandler(event)}
                        styleClass={`btn_primary`}> Login
                    </Button >

                </div>
                <div className="col-auto">
                    <Button
                        onClick={(event) => logOutHandler(event)}
                        disabled={true}
                        styleClass={`btn_danger`}> Logout
                    </Button >
                </div>
            </div>


        </div>
    )
}

export default User