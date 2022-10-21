import React, { useState } from 'react'
import { DangerButton, SuccessButton } from '../../../Shared/SharedComponentPath';

type userType = {
  name: string;
  phone: number;
  isLogin: boolean;
}

const UserDetail = () => {
  const [UserLogin, SetUserLoginFun] = useState({} as userType)

  const loginHandler = () => {
    SetUserLoginFun({
      name: "Clementine Bauch",
      phone: 985364789,
      isLogin: true
    })
  }

  const logOutHandler = () => {
    SetUserLoginFun({} as userType)
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
                <td className='py-2 px-3'>Status</td>
              </tr>
            </thead>
            <tbody>
              {UserLogin ?
                (<tr>
                  <td className='p-3'> {UserLogin.name} </td>
                  <td className='p-3'> {UserLogin.phone} </td>
                  <td className='p-3'> {UserLogin.isLogin ? "Login" : "Not Login"} </td>
                </tr>)
                : (<tr>
                  <td className='p-3 text-center' colSpan={3}> <h1 className='color3_1'>No Data Found</h1> </td>
                </tr>)
              }
            </tbody>
          </table>


        </div>
        <div className="col-auto">
          <SuccessButton
            onClickHandle={loginHandler}
            ButtonText='Login'
          />
        </div>
        <div className="col-auto">
          <DangerButton
            onClickHandle={logOutHandler}
            ButtonText='Login Out'
          />
        </div>
      </div>
    </div>
  )
}

export default UserDetail