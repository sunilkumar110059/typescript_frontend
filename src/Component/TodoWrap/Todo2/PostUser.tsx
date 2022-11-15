import React, { useState } from 'react'
import { Input, SuccessButton } from '../../../Shared/SharedComponentPath';
import { useContextFun } from '../../../ContextApi/TodoContext/TodoContext';
import { PostType } from '../../../ContextApi/TodoContext/TodoDataType';


function PostUser() {

    const { addPost } = useContextFun()

    const [PostUserState, SetPostUser] = useState<PostType>(
        {
            id: new Date().getTime(),
            name: "name"+Math.random().toString(36).substring(1, 10),
            username: "username"+ Math.random().toString(36).substring(2, 30),
            email: Math.random().toString(20).substring(3, 28) + "@gmail.com",
            phone: Math.floor(Math.random() * 1000000000).toString(),
            website: "xyz" + Math.random().toString(18).substring(1, 9) + ".com",

            address: {
                street: "Kattie Turnpike",
                suite: "Suite 198",
                city: "Lebsackbury",
                zipcode: "31428-2261",
                geo: {
                    "lat": "-38.2386",
                    "lng": "57.2232"
                }
            },
            company: {
                name: "Hoeger LLC",
                catchPhrase: "Centralized empowering task-force",
                bs: "target end-to-end models"
            }
        }
    )

    const onChangeHander = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        SetPostUser({
            ...PostUserState,
            [name]: value
        })
    }

    const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        addPost(PostUserState)
    }

    return (
        <div className='cover mb-3'>
            <form onSubmit={(event) => submitHandler(event)}>
                <div className='row align-items-end'>
                    <div className='col'>
                        <Input
                            LabelAddClass="d-block mb-1 fw-bold"
                            LabelText="Name"
                            FormAddClass="border1 bordercolor2_4"
                            InputAddClass="p-2"
                            InputType="text"
                            InputName="name"
                            InputValue={PostUserState.name}
                            onChangeHandler={onChangeHander}
                        />
                    </div>

                    <div className='col'>
                        <Input
                            LabelAddClass="d-block mb-1 fw-bold"
                            LabelText="User Name"
                            FormAddClass="border1 bordercolor2_4"
                            InputAddClass="p-2"
                            InputType="text"
                            InputName="username"
                            InputValue={PostUserState.username}
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
                            InputValue={PostUserState.email}
                            onChangeHandler={onChangeHander}
                        />
                    </div>

                    <div className='col'>
                        <Input
                            LabelAddClass="d-block mb-1 fw-bold"
                            LabelText="Phone"
                            FormAddClass="border1 bordercolor2_4"
                            InputAddClass="p-2"
                            InputType="text"
                            InputName="phone"
                            InputValue={PostUserState.phone}
                            onChangeHandler={onChangeHander}
                        />
                    </div>

                    <div className='col'>
                        <Input
                            LabelAddClass="d-block mb-1 fw-bold"
                            LabelText="Website"
                            FormAddClass="border1 bordercolor2_4"
                            InputAddClass="p-2"
                            InputType="text"
                            InputName="website"
                            InputValue={PostUserState.website}
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

export default PostUser