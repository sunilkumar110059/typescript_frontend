import React from 'react'
type PersonListProps = {
    personListArr: {
        firstname: string;
        lastname: string;
        age: number;
        education: string;
        address: string;
        phone?: number;
    }[]
}

function PersonList(props: PersonListProps) {
    const { personListArr } = props
    return (
        <div className='cover'>
            <div className='cover'>
                <table className='d-table-collapse w-100 border1 bordercolor2_5'>
                    <thead className='bg2_1 color1'>
                        <tr>
                            <td className='py-2 px-3'>First Name</td>
                            <td className='py-2 px-3'>Last Name</td>
                            <td className='py-2 px-3'>Age</td>
                            <td className='py-2 px-3'>Education</td>
                            <td className='py-2 px-3'>Address</td>
                            <td className='py-2 px-3'>Phone</td>
                        </tr>
                    </thead>
                    <tbody>

                        {personListArr && personListArr.map((curElm, index) => {
                            return (
                                < tr className={`${index % 2 === 0 ? "bg2_5" : ""}`} key={index} >
                                    <td className='p-3'> {curElm.firstname}</td>
                                    <td className='p-3'>{curElm.lastname}</td>
                                    <td className='p-3'> {curElm.age} </td>
                                    <td className='p-3'> {curElm.education}</td>
                                    <td className='p-3'> {curElm.address} </td>
                                    <td className='p-3'> {curElm.phone} </td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>


        </div >
    )
}

export default PersonList