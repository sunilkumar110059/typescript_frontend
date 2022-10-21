import React, { useState } from 'react';
import { Input, SuccessButton } from '../../../Shared/SharedComponentPath';
import { userTypeObj, userObj } from './TypeUser';


type userProps = {
    getValueFun: (obj:userTypeObj) => void
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
                            LabelAddClass="d-block mb-1 fw-bold"
                            LabelText="First Name"
                            FormAddClass="border1 bordercolor2_4"
                            InputAddClass="p-2"
                            InputType="text"
                            InputName="firstname"
                            InputValue={firstname}
                            onChangeHandler={onChangeHandler}
                        />

                    </div>
                    <div className='col'>
                        <Input
                            LabelAddClass="d-block mb-1 fw-bold"
                            LabelText="Last Name"
                            FormAddClass="border1 bordercolor2_4"
                            InputAddClass="p-2"
                            InputType="text"
                            InputName="email"
                            InputValue={email}
                            onChangeHandler={onChangeHandler}
                        />
                    </div>

                    <div className='col-auto'>
                        <SuccessButton
                            ButtonText='Add User'
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default User6