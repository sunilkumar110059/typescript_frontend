import React, { Fragment, useState } from 'react';
import { useContextFun } from '../../../ContextApi/TodoContext/TodoContext';



function UserList() {

    const { state, deletePost, editPost } = useContextFun()
    const { post } = state;
    const [IsShow, IsShowFun] = useState<number | null>(null)

    const viewHandler = (id: number) => {
        if (IsShow === id) {
            IsShowFun(null);
            return false
        } else {
            IsShowFun(id)
        }
    }

    return <table className='d-table-collapse w-100 border1 bordercolor2_5'>
        <thead className='bg3_1 color1'>
            <tr>
                <td className='py-2 px-3'>Name</td>
                <td className='py-2 px-3'>User Name</td>
                <td className='py-2 px-3'>Email</td>
                <td className='py-2 px-3'>Phone</td>
                <td className='py-2 px-3'>Website</td>
                <td className='py-2 px-3'>Status</td>
            </tr>
        </thead>

        <tbody>

            {post.map((user, index) => {


                return (
                    <Fragment key={index}>
                        <tr className={`${index % 2 === 0 ? "bg2_5" : ""}`}>
                            <td className='p-3'>{user.name}</td>
                            <td className='p-3'> {user.username}</td>
                            <td className='p-3'> {user.email}</td>
                            <td className='p-3'> {user.phone}</td>
                            <td className='p-3'> {user.website}</td>
                            <td className='px-3'>

                                <div className='row g-0 text-center color1'>
                                    <div className="col bg4_1 py-2 cursor-pointer" onClick={() => editPost(user.id)}>Edit</div>
                                    <div className="col bg3_1 py-2 cursor-pointer" onClick={() => deletePost(user.id)}>Delete</div>
                                    <div className="col bg2_1 py-2 cursor-pointer" onClick={() => viewHandler(user.id)}> View </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            {IsShow === user.id &&
                                <td colSpan={7} className='px-3 bg2_4'>
                                    <div className='wrapper'>
                                        <div className='cover my-3'>
                                            <h3 className='mb-2'>Address</h3>
                                            <table className='d-table-collapse w-100'>
                                                <thead className='bg2_2 color1'>
                                                    <tr>
                                                        <td className='py-1 px-3'> Street</td>
                                                        <td className='py-1 px-3'> Suite</td>
                                                        <td className='py-1 px-3'> City</td>
                                                        <td className='py-1 px-3'> Zip Code</td>
                                                        <td className='py-1 px-3'> Latitude</td>
                                                        <td className='py-1 px-3'> Longitude</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className='bg1'>
                                                        <td className='py-1 px-3'> {user.address.street}</td>
                                                        <td className='py-1 px-3'> {user.address.suite}</td>
                                                        <td className='py-1 px-3'> {user.address.city}</td>
                                                        <td className='py-1 px-3'> {user.address.zipcode}</td>
                                                        <td className='py-1 px-3'> {user.address.geo.lat}</td>
                                                        <td className='py-1 px-3'> {user.address.geo.lng}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className='cover my-3'>
                                            <h3 className='mb-2'>Company</h3>
                                            <table className='d-table-collapse w-100'>
                                                <thead className='bg2_2 color1'>
                                                    <tr>
                                                        <td className='py-1 px-3'> Company Name</td>
                                                        <td className='py-1 px-3'> Catch Phrase</td>
                                                        <td className='py-1 px-3'> BS</td>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr className='bg1'>
                                                        <td className='py-1 px-3'> {user.company.name}</td>
                                                        <td className='py-1 px-3'> {user.company.catchPhrase}</td>
                                                        <td className='py-1 px-3'> {user.company.bs}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </td>
                            }
                        </tr>
                    </Fragment>
                )
            })}
        </tbody>
    </table>
}

export default UserList