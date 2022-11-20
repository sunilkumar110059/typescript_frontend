import React, { Fragment, useState } from 'react';
import { BsArrowDownSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs';
import { PostData } from './AcData';


function AccordionIndex1() {

    const [isShow, SetIsShow] = useState<boolean | number>(false)

    const accordionHandler = (id: number) => {
        if (isShow === id) { SetIsShow(false) }
        else { SetIsShow(id) }
    }

    return (
        <Fragment>
            <div className="cover bg2_5 px-3 border1 bordercolor2_4 mb-4">
                <div className="row">
                    <div className="col py-1"> <h1>Accordion 1 </h1> </div>
                    <div className="col-auto py-1 border_left1 bordercolor2_4 d-flex align-items-center"> Accordion 1 </div>
                </div>
            </div>
            <div className='container'>
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


                        {PostData && PostData.map((curElm, index) => {
                            return (
                                <Fragment key={index}>
                                    <tr className={`${index % 2 === 0 ? "bg2_5" : ""}`} key={index} >
                                        <td className='p-3'> {curElm.id}</td>
                                        <td className='p-3'> {curElm.name}</td>
                                        <td className='p-3'>{curElm.username}</td>
                                        <td className='p-3'> {curElm.email} </td>
                                        <td className='p-3'> {curElm.phone} </td>
                                        <td className='p-3'> {curElm.website} </td>
                                        <td className='p-3' onClick={() => accordionHandler(curElm.id)}>
                                            {isShow === curElm.id ? <BsArrowDownSquareFill className='fs-4' /> : <BsFillArrowRightSquareFill className='fs-4 color3_1' />}
                                        </td>
                                    </tr>

                                    {isShow === curElm.id ? <tr>
                                        <td colSpan={7}>
                                            <div className='cover p-3 bg2_2 color1'>
                                                Lorean Lipsum some dummy text
                                            </div>
                                        </td>
                                    </tr> : false}

                                </Fragment>
                            )
                        })}


                    </tbody>
                </table>

            </div>
        </Fragment>
    )
}

export default AccordionIndex1