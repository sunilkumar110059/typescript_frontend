import React, { Fragment, useState } from 'react'
import { DangerButton, SuccessButton } from '../../../Shared/SharedComponentPath';
import Private from './Private';
import Profile from './Profile';

function TS21() {

    const [isLogin, SetIsLogin] = useState<boolean>(false)

    const loginHandler = () => {
        SetIsLogin(true)
    }

    const logOutHandler = () => {
        SetIsLogin(false)
    }

    return (
        <Fragment>
            <div className="cover bg2_5 px-3 border1 bordercolor2_4 mb-4">
                <div className="row">
                    <div className="col-auto py-1"> <h1>TS 21</h1></div>
                    <div className="col py-1 d-flex align-items-center">
                        <h2 className='color3_1'>After Login Show Private Component </h2>
                    </div>
                    <div className="col-auto py-1 border_left1 bordercolor2_4 d-flex align-items-center"> TS 21</div>
                </div>
            </div>

            <div className='container'>
                <div className="row">
                    <div className="col-12 mb-4">
                        <Private
                            Component={Profile}
                            isLoggedIn={isLogin}
                        />
                    </div>

                    <div className="col-auto">
                        {isLogin ?
                            (<DangerButton onClickHandle={logOutHandler} ButtonText='Login Out' />)
                            :
                            (<SuccessButton onClickHandle={loginHandler} ButtonText='Login' />)
                        }
                    </div>

                </div>

            </div>
        </Fragment>
    )
}

export default TS21