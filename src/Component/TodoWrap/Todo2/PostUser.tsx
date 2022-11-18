import React, { useState } from 'react'
import { Input, Button } from '../../../Shared/SharedComponentPath';
import { useContextFun } from '../../../ContextApi/TodoContext/TodoContext';
import { PostType } from '../../../ContextApi/TodoContext/TodoDataType';


function PostUser() {

    const { addPost } = useContextFun()

    const [PostUserState, SetPostUser] = useState<PostType>(
        {
            id: new Date().getTime(),
            name: "name" + Math.random().toString(36).substring(1, 10),
            username: "username" + Math.random().toString(36).substring(2, 30),
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
                            labelText={'Name'}
                            labelStyleClass={'d-block mb-1 fw-bold'}
                            formStyleClass={'border1 bordercolor2_4'}
                            inputStyleClass={'p-2'}
                            inputStyleId={'firstname'}
                            autoComplete={'on'}
                            type={'text'}
                            name={'name'}
                            value={PostUserState.name}
                            onChange={(event) => { onChangeHander(event) }}
                        />

                    </div>

                    <div className='col'>
                        <Input
                            labelText={'User Name'}
                            labelStyleClass={'d-block mb-1 fw-bold'}
                            formStyleClass={'border1 bordercolor2_4'}
                            inputStyleClass={'p-2'}
                            inputStyleId={'username'}
                            autoComplete={'on'}
                            type={'text'}
                            name={'username'}
                            value={PostUserState.username}
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
                            value={PostUserState.email}
                            onChange={(event) => { onChangeHander(event) }}
                        />
                    </div>

                    <div className='col'>
                        <Input
                            labelText={'Phone'}
                            labelStyleClass={'d-block mb-1 fw-bold'}
                            formStyleClass={'border1 bordercolor2_4'}
                            inputStyleClass={'p-2'}
                            inputStyleId={'phone'}
                            autoComplete={'on'}
                            type={'text'}
                            name={'phone'}
                            value={PostUserState.phone}
                            onChange={(event) => { onChangeHander(event) }}
                        />

                    </div>

                    <div className='col'>
                        <Input
                            labelText={'Website'}
                            labelStyleClass={'d-block mb-1 fw-bold'}
                            formStyleClass={'border1 bordercolor2_4'}
                            inputStyleClass={'p-2'}
                            inputStyleId={'website'}
                            autoComplete={'on'}
                            type={'text'}
                            name={'website'}
                            value={PostUserState.website}
                            onChange={(event) => { onChangeHander(event) }}
                        />
                    </div>

                    <div className='col-auto'>
                        <Button styleClass={'btn_primary'} >Add User</Button>
                    </div>

                </div>
            </form>
        </div>

    )
}

export default PostUser