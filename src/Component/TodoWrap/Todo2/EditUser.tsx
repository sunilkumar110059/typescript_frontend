import React, { useState, useEffect } from 'react'
import { Input, SuccessButton } from '../../../Shared/SharedComponentPath';
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
                            LabelAddClass="d-block mb-1 fw-bold"
                            LabelText="First Name"
                            FormAddClass="border1 bordercolor2_4"
                            InputAddClass="p-2"
                            InputType="text"
                            InputName="name"
                            InputValue={EditUser.name}
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
                            InputValue={EditUser.email}
                            onChangeHandler={onChangeHander}
                        />
                    </div>
                    <div className='col-auto'>
                        <SuccessButton
                            ButtonText='Edit User'
                        />
                    </div>
                </div>
            </form>
        </div>

    )
}

export default EditUser