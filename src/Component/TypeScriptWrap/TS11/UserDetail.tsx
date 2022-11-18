import React, { useState } from 'react'
import { Button } from '../../../Shared/SharedComponentPath';

type userType = {
  name: string;
  phone: number | string;
  isLogin: boolean;
  email?: string;
}

const UserDetail = () => {
  const [UserLogin, SetUserLoginFun] = useState<userType>({
    name: "Sunil Kumar",
    phone: 985364789,
    isLogin: true
  })

  const loginHandler = () => {
    SetUserLoginFun({
      ...UserLogin,
      phone: "8882133269",
      email: "sunil@gmail.com",
    })
  }

  return (
    <div className='cover'>
      <div className="row">
        <div className="col-12 mb-4">

          <table className='d-table-collapse w-100 border1 bordercolor2_5'>
            <thead className='bg2_1 color1'>
              <tr>
                <td className='py-2 px-3'>Name</td>
                <td className='py-2 px-3'>Phone</td>
                <td className='py-2 px-3'>Email</td>
                <td className='py-2 px-3'>Status</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='p-3'> {UserLogin.name} </td>
                <td className='p-3'> {UserLogin.phone} </td>
                <td className='py-2 px-3'>{UserLogin.email} </td>
                <td className='p-3'> {UserLogin.isLogin ? "Login" : "Not Login"} </td>
              </tr>
            </tbody>
          </table>

        </div>
        <div className="col-auto">

          <Button
            onClick={() => loginHandler()}
            disabled={true}
            styleClass={`btn_primary`}> Assign Email
          </Button >
        </div>

      </div>
    </div>
  )
}

export default UserDetail