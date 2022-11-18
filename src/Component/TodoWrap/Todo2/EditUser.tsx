import React, { useState, useEffect } from 'react'
import { Input, Button } from '../../../Shared/SharedComponentPath';
import { useContextFun } from '../../../ContextApi/TodoContext/TodoContext';
import { PostType } from '../../../ContextApi/TodoContext/TodoDataType';


function EditUser() {

    const { state, updatePost } = useContextFun()
    const { singlePost } = state;

    const [EditUser, SetEditUser] = useState<PostType>({
        ...singlePost,
        name: "",
        email: ""
    })

    const onChangeHander = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        SetEditUser({
            ...EditUser,
            [name]: value
        })
    }

    const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        updatePost(EditUser)
    }

    useEffect(() => {
        SetEditUser({
            ...singlePost,
            name: singlePost.name || "",
            email: singlePost.email || "",
        })
    }, [singlePost])

    return (
        <div className='cover mb-3'>
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
                            name={'name'}
                            value={EditUser.name}
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
                            value={EditUser.email}
                            onChange={(event) => { onChangeHander(event) }}
                        />

                    </div>
                    <div className='col-auto'>
                      
                        <Button styleClass={'btn_primary'} >Edit User</Button>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default EditUser