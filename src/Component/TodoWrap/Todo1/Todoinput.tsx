import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Input, SuccessButton } from '../../../Shared/SharedComponentPath';
import { InterFaceTodo, userObj } from './InterfaceTodo1';


interface TodoinputProps {
    getUserFun(obj: InterFaceTodo): void
}

function Todoinput(props: TodoinputProps) {
    const { getUserFun } = props

    const [AddUserState, SetUsersFn] = useState<InterFaceTodo>(userObj)
    const { fistname, email, age } = AddUserState

    const onChangeHander = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        SetUsersFn({
            ...AddUserState,
            [name]: value,
        })
    }

    const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        if (fistname !== "" && email !== "" && age !== 0) {
            getUserFun({
                ...AddUserState,
                id: new Date().getTime().toString()
            })
            SetUsersFn(userObj)
        }
    }


    return (
        <div className='cover'>
            <form onSubmit={(event) => submitHandler(event)}>
                <div className='row align-items-end'>
                    <div className='col'>
                        <Input
                            LabelAddClass="d-block mb-1 fw-bold"
                            LabelText="First Name"
                            FormAddClass="border1 bordercolor2_4"
                            InputAddClass="p-2"
                            InputType="text"
                            InputName="fistname"
                            InputValue={fistname}
                            onChangeHandler={onChangeHander}
                        />

                    </div>
                    <div className='col'>
                        <Input
                            LabelAddClass="d-block mb-1 fw-bold"
                            LabelText="Email"
                            FormAddClass="border1 bordercolor2_4"
                            InputAddClass="p-2"
                            InputType="text"
                            InputName="email"
                            InputValue={email}
                            onChangeHandler={onChangeHander}
                        />
                    </div>
                    <div className='col'>
                        <Input
                            LabelAddClass="d-block mb-1 fw-bold"
                            LabelText="Age"
                            FormAddClass="border1 bordercolor2_4"
                            InputAddClass="p-2"
                            InputType="text"
                            InputName="age"
                            InputValue={age}
                            onChangeHandler={onChangeHander}
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

export default Todoinput