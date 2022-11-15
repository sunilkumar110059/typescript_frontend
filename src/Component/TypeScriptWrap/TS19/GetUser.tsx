import { useContext } from "react";
import { SuccessButton } from "../../../Shared/SharedComponentPath";
import { MyContext } from "./ContextApi";

function GetUser() {
    const { Users, SetUserFn } = useContext(MyContext)
    const loginHandler = () => {
        SetUserFn([
            ...Users,
            {
                id: new Date().getTime(),
                name: Math.random().toString(36).substring(1, 10),
                username: Math.random().toString(36).substring(2, 30),
                email: Math.random().toString(20).substring(3, 28) + "@gmail.com",
                phone: Math.floor(Math.random() * 10000000000),
                website: Math.random().toString(18).substring(1, 9) + ".com",
                isLogin: true,
            }
        ])
    }

    return (
        <div className='cover mb-5'>
            <div className="row">
                <div className="col-auto">
                    <SuccessButton
                        onClickHandle={loginHandler}
                        ButtonText='ADD POST'
                    />
                </div>
                <div className="col">
                    <h1>List of Array Pass By Context API</h1>
                </div>
            </div>
            
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
                    {Users && Users.map((curElm, index) => {
                        return (
                            <tr className={`${index % 2 === 0 ? "bg2_5" : ""}`} key={index} >
                                <td className='p-3'> {curElm.id}</td>
                                <td className='p-3'> {curElm.name}</td>
                                <td className='p-3'>{curElm.username}</td>
                                <td className='p-3'> {curElm.email} </td>
                                <td className='p-3'> {curElm.phone} </td>
                                <td className='p-3'> {curElm.website} </td>
                                <td className='p-3'> {curElm.isLogin ? "Login" : "Not Login"} </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default GetUser