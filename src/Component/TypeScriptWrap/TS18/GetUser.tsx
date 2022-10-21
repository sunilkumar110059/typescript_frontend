import { useContext } from "react";
import { MyContext } from "./ContextApi";

function GetUser() {


    const myData = useContext(MyContext)

    return (
        <div className='cover mb-5'>
            <h1>List of Array Pass By Context API</h1>
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
                    {myData && myData.map((curElm, index) => {
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