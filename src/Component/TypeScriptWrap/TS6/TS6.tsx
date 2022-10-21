import React, { Fragment, useState } from 'react'
import User6 from './User6';
import { userTypeObj } from './TypeUser';

function TS6() {
    const [UserList, SetUserListFun] = useState<userTypeObj[]>([])
    const getValueFun = (obj: userTypeObj) => {
        console.log(obj)
        SetUserListFun([
            ...UserList,
            obj
        ])
    }
    return (
        <Fragment>
            <div className="cover bg2_5 px-3 border1 bordercolor2_4 mb-4">
                <div className="row">
                    <div className="col-auto py-1"> <h1>TS 6 </h1></div>
                    <div className="col py-1 d-flex align-items-center">  <h2 className='color3_1'>Event Pass By Props</h2> </div>
                    <div className="col-auto py-1 border_left1 bordercolor2_4 d-flex align-items-center"> TS 6</div>
                </div>
            </div>

            <div className='container'>
                <User6
                    getValueFun={getValueFun}
                />
                <div className='cover mt-3'>
                    <table className='d-table-collapse w-100 border1 bordercolor2_5'>
                        <thead className='bg2_1 color1'>
                            <tr>
                                <td className='py-2 px-3'>S.No</td>
                                <td className='py-2 px-3'>Name</td>
                                <td className='py-2 px-3'>Email</td>
                                <td className='py-2 px-3'>ID</td>
                            </tr>
                        </thead>
                        <tbody>
                            {UserList && UserList.map((curElm, index) => {
                                return (
                                    <tr className={`${index % 2 === 0 ? "bg2_5" : ""}`} key={index} >
                                        <td className='p-3'> {index + 1}</td>
                                        <td className='p-3'> {curElm.firstname}</td>
                                        <td className='p-3'>{curElm.email}</td>
                                        <td className='p-3'> {curElm.id} </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    )
}

export default TS6