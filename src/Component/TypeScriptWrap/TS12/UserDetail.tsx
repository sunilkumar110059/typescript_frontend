import React, { useState } from 'react'
import { SuccessButton } from '../../../Shared/SharedComponentPath';


// start 
//direct data type can be assing in array
type userArray2Type = {
  name: string;
}
let user2Array: userArray2Type[] = [
  { name: "Sunil Kumar" },
  { name: "Anil Kumar" },
]
// end


// userArrayType declare in useState in angle bracket
type userArrayType = {
  id: string | number
  name: string;
  email: string;
  phone: number;
}

let userArray = [
  {
    id: 112,
    name: "Clementine Bauch",
    email: "Nathan@yesenia.net",
    phone: 985364789
  },
  {
    id: 567,
    name: "Patricia Lebsack",
    email: "Julianne.OConner@kory.org",
    phone: 985632459

  }
]

function UserDetail() {
  console.log("ArrayOther===", user2Array)

  const [UserState, SetUserFun] = useState<userArrayType[]>(userArray);

  const addUserHandler = () => {
    let times = new Date().getTime();

    SetUserFun([
      ...UserState,
      {
        id: times,
        name: `Sunil== ${times}`,
        email: `sunilkumar${times}@gmail.com`,
        phone: Math.floor(Math.random() * 1000000000)
      }
    ]);
  };


  return (
    <div className='cover'>
      <div className="row">
        <div className="col-auto">
          <SuccessButton
            onClickHandle={addUserHandler}
            ButtonText='Add User' />
        </div>
        <div className="col-12 mb-4">
          <table className='d-table-collapse w-100 border1 bordercolor2_5'>
            <thead className='bg2_1 color1'>
              <tr>
                <td className='py-2 px-3'>ID</td>
                <td className='py-2 px-3'>Name</td>
                <td className='py-2 px-3'>Email</td>
                <td className='py-2 px-3'>Phone</td>
              </tr>
            </thead>
            <tbody>
              {UserState && UserState.map((curElm, index) => {
                return (
                  <tr className={`${index % 2 === 0 ? "bg2_5" : ""}`} key={index}>
                    <td className='p-3'> {curElm.id} </td>
                    <td className='p-3'> {curElm.name} </td>
                    <td className='p-3'> {curElm.phone} </td>
                    <td className='p-3'> {curElm.phone} </td>
                  </tr>
                );
              })}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserDetail