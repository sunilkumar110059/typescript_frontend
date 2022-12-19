import React, { Fragment, useState } from 'react';
import { TiPlus, TiMinus } from 'react-icons/ti';
import { FaTrashAlt } from 'react-icons/fa'


let cartproduct = [
    { id: 463, product: "Redmi Phone", stock: 10, qty: 1, amount: 70 },
    { id: 927, product: "Kurta", stock: 5, qty: 1, amount: 120 }
]


type productTypes = {
    id: number;
    product: string;
    stock: number;
    qty: number;
    amount: number;
}

function ScriptIndex1() {
    const [CartState, SetCart] = useState<productTypes[]>(cartproduct)
    const incQty = (id: number) => {
        const cartInc = CartState.map((prod) => {
            if (prod.stock > prod.qty) {
                if (prod.id === id) {
                    return {
                        ...prod,
                        qty: prod.qty + 1
                    }
                }
            }
            return prod
        })
        SetCart(cartInc)
    }

    const decQty = (id: number) => {
        const cartDec = CartState.map((prod) => {
            if (prod.qty > 1) {
                if (prod.id === id) {
                    return {
                        ...prod,
                        qty: prod.qty - 1
                    }
                }
            }
            return prod
        })

        SetCart(cartDec)
    }


    const deleteCartItems = (id: number) => {
        let removeItems = CartState.filter((prod) => prod.id !== id)
        SetCart(removeItems)
    }



    let grandTotal = 0
    const getTotal = (amount: number, qty: number) => {
        let totol = amount * qty
        grandTotal += totol
        return totol
    }

    return (
        <Fragment>
            <div className="cover bg2_5 px-3 border1 bordercolor2_4 mb-4">
                <div className="row">
                    <div className="col py-1"> <h1>Cart Product </h1> </div>
                    <div className="col-auto py-1 border_left1 bordercolor2_4 d-flex align-items-center"> Script 1 </div>
                </div>
            </div>
            <div className='container'>

                <table className='d-table-collapse w-100 border1 bordercolor2_5'>
                    <thead className='bg3_1 color1'>
                        <tr>
                            <td className='py-2 px-3'>Id</td>
                            <td className='py-2 px-3'>Product Name</td>
                            <td className='py-2 px-3'>Product INR</td>
                            <td className='py-2 px-3'>Qty.</td>
                            <td className='py-2 px-3 text-end'>Total Price</td>
                            <td className='py-2 px-3' style={{ width: "200px" }}>Status</td>
                            <td className='py-2 px-3' style={{ width: "200px" }}>Stock</td>
                            <td className='py-2 px-3' style={{ width: "50px" }}>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {CartState && CartState.map((cartitems, index) => {
                            const { id, product, amount, qty, stock } = cartitems;
                            return (

                                <tr className={`${index % 2 === 0 ? "bg2_5" : ""}`} key={index} >
                                    <td className='p-3'>{id}</td>
                                    <td className='p-3'>{product} </td>
                                    <td className='p-3'>{amount} </td>
                                    <td className='p-3'>{qty} </td>
                                    <td className='p-3 text-end'>{getTotal(amount, qty)}</td>
                                    <td className='p-3 border_left1 border_right1 bordercolor2_4'>
                                        <div className="row justify-content-center g-0">
                                            <div className="col text-center " onClick={() => decQty(id)}>
                                                <TiMinus className='fs-4' />
                                            </div>
                                            <div className="col text-center fs-4">{qty}</div>
                                            <div className="col text-center" onClick={() => incQty(id)}>
                                                <TiPlus className='fs-4' />
                                            </div>
                                        </div>
                                    </td>

                                    <td className='p-3'> {stock === qty && ` Available stock is ${qty}`} </td>
                                    <td className='p-3' onClick={() => deleteCartItems(id)}> <FaTrashAlt /> </td>
                                </tr>
                            )
                        })}

                    </tbody >

                    <tfoot className='bg2_2'>
                        <tr>
                            <td className='py-2 px-3' colSpan={5}> <h3 className='color1 text-end'> Grand Total = {grandTotal}</h3></td>
                            <td className='py-2 px-3' colSpan={3}></td>
                        </tr>
                    </tfoot>
                </table >

            </div >
        </Fragment >
    )
}

export default ScriptIndex1