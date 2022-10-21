
import React, { Fragment } from 'react';
import { UserTypes } from './PersonType'

// this type for object
const UserObjWithoutProps: UserTypes = {
    id: 2,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    phone: 985364789,
    website: "ramiro.info",
    isLogin: true
}

type PersonProps = {
    UserObjByProps: UserTypes
}


function Person(props: PersonProps) {
    const { UserObjByProps } = props
    return (
        <Fragment>
            <div className='cover mb-5'>
                <h2>Display Person Object Directly</h2>
                <table className='d-table-collapse w-100 border1 bordercolor2_5'>
                    <thead className='bg3_1 color1'>
                        <tr>
                            <td className='py-2 px-3'>Id</td>
                            <td className='py-2 px-3'>Name</td>
                            <td className='py-2 px-3'>User Name</td>
                            <td className='py-2 px-3'>Email</td>
                            <td className='py-2 px-3'>Phone</td>
                            <td className='py-2 px-3'>Website</td>
                            <td className='py-2 px-3'>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='p-3'> {UserObjWithoutProps.id}</td>
                            <td className='p-3'> {UserObjWithoutProps.name}</td>
                            <td className='p-3'>{UserObjWithoutProps.username}</td>
                            <td className='p-3'> {UserObjWithoutProps.email} </td>
                            <td className='p-3'> {UserObjWithoutProps.phone} </td>
                            <td className='p-3'> {UserObjWithoutProps.website} </td>
                            <td className='p-3'> {UserObjWithoutProps.isLogin ? "Login" : "Not Login"} </td>
                        </tr>
                    </tbody>
                </table>
            </div>



            <div className='cover mb-5'>
                <h2>Display Person Object Pass By Props</h2>
                <table className='d-table-collapse w-100 border1 bordercolor2_5'>
                    <thead className='bg2_1 color1'>
                        <tr>
                            <td className='py-2 px-3'>Id</td>
                            <td className='py-2 px-3'>Name</td>
                            <td className='py-2 px-3'>User Name</td>
                            <td className='py-2 px-3'>Email</td>
                            <td className='py-2 px-3'>Phone</td>
                            <td className='py-2 px-3'>Website</td>
                            <td className='py-2 px-3'>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='p-3'> {UserObjByProps.id}</td>
                            <td className='p-3'> {UserObjByProps.name}</td>
                            <td className='p-3'>{UserObjByProps.username}</td>
                            <td className='p-3'> {UserObjByProps.email} </td>
                            <td className='p-3'> {UserObjByProps.phone} </td>
                            <td className='p-3'> {UserObjByProps.website} </td>
                            <td className='p-3'> {UserObjByProps.isLogin ? "Login" : "Not Login"} </td>
                        </tr>
                    </tbody>
                </table>
            </div>




        </Fragment>


    )
}

export default Person