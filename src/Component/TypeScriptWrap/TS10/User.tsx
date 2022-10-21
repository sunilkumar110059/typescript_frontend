import React, { useState } from 'react';
import { SuccessButton, DangerButton } from '../../../Shared/SharedComponentPath';


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
                    <SuccessButton
                        onClickHandle={loginHandler}
                        ButtonText='Login'
                    />
                </div>
                <div className="col-auto">
                    <DangerButton
                        onClickHandle={logOutHandler}
                        ButtonText='Login'
                    />
                </div>
            </div>


        </div>
    )
}

export default User