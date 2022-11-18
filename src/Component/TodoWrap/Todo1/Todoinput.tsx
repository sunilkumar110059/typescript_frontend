import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Input, Button } from '../../../Shared/SharedComponentPath';
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
                            labelText={'First Name'}
                            labelStyleClass={'d-block mb-1 fw-bold'}
                            formStyleClass={'border1 bordercolor2_4'}
                            inputStyleClass={'p-2'}
                            inputStyleId={'firstname'}
                            autoComplete={'on'}
                            type={'text'}
                            name={'fistname'}
                            value={fistname}
                            onChange={(event) => { onChangeHander(event) }}
                        />


                    </div>
                    <div className='col'>


                        <Input
                            labelText={'Email'}
                            labelStyleClass={'d-block mb-1 fw-bold'}
                            formStyleClass={'border1 bordercolor2_4'}
                            inputStyleClass={'p-2'}
                            inputStyleId={'email'}
                            autoComplete={'on'}
                            type={'text'}
                            name={'email'}
                            value={email}
                            onChange={(event) => { onChangeHander(event) }}
                        />

                    </div>
                    <div className='col'>
                        <Input
                            labelText={'Age'}
                            labelStyleClass={'d-block mb-1 fw-bold'}
                            formStyleClass={'border1 bordercolor2_4'}
                            inputStyleClass={'p-2'}
                            inputStyleId={'age'}
                            autoComplete={'on'}
                            type={'text'}
                            name={'age'}
                            value={age}
                            onChange={(event) => { onChangeHander(event) }}
                        />


                    </div>
                    <div className='col-auto'>
                        <Button> Add User</Button>

                    </div>
                </div>
            </form>


        </div>
    )
}

export default Todoinput