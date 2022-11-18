import React, { useState } from 'react';
import { Input, Button } from '../../../Shared/SharedComponentPath';
import { userTypeObj, userObj } from './TypeUser';


type userProps = {
    getValueFun: (obj: userTypeObj) => void
}

function User6(props: userProps) {

    const { getValueFun } = props
    const [UserState, SetUserFun] = useState<userTypeObj>(userObj)
    const { firstname, email } = UserState

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target
        SetUserFun({
            ...UserState,
            [name]: value,
        })
    }

    const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        if (firstname !== "" && email) {
            getValueFun({
                ...UserState,
                id: new Date().getTime().toString()
            })
            SetUserFun(userObj)
        }
    }


    return (
        <div className='cover'>
            <form onSubmit={(event) => submitHandler(event)} >
                <div className='row align-items-end'>
                    <div className='col'>

                        <Input
                            labelText={'First Name'}
                            labelStyleClass={'d-block mb-1 fw-bold'}
                            formStyleClass={'border1 bordercolor2_4'}
                            inputStyleClass={'p-2'}
                            inputStyleId={'firstname'}
                            autoComplete={'on'}
                            type={'text'}
                            name={'firstname'}
                            value={firstname}
                            onChange={(event) => { onChangeHandler(event) }}
                        />

                    </div>
                    <div className='col'>

                        <Input
                            labelText={'Last Name'}
                            labelStyleClass={'d-block mb-1 fw-bold'}
                            formStyleClass={'border1 bordercolor2_4'}
                            inputStyleClass={'p-2'}
                            inputStyleId={'email'}
                            autoComplete={'on'}
                            type={'text'}
                            name={'email'}
                            value={email}
                            onChange={(event) => { onChangeHandler(event) }}
                        />

                    </div>

                    <div className='col-auto'>
                        <Button
                            styleClass={`btn_primary`}> Add User
                        </Button >

                    </div>
                </div>
            </form>
        </div>
    )
}

export default User6