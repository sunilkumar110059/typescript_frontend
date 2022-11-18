import React, { Fragment, useState } from 'react';
import { TiPlus, TiMinus } from 'react-icons/ti';

function ScriptIndex1() {


    let cartproduct = [
        {
            id: 463,
            product: "Redmi Phone",
            stock: 10,
            qty: 1,
            amount: 70
        },
        {
            id: 927,
            product: "Kurta",
            stock: 10,
            qty: 1,
            amount: 70
        }

    ]

    const [CartState, SetCart] = useState({
        product: "Redmi Phone",
        stock: 10,
        qty: 1,
        amount: 70
    })

    const { stock, qty, amount, product } = CartState


    const incQty = () => {
        if (stock > qty) {
            SetCart({ ...CartState, qty: qty + 1 })
        }
    }

    const decQty = () => {
        if (qty > 1) {
            SetCart({ ...CartState, qty: qty - 1 })
        }
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






                <div className="row">
                    <div className="col-auto">
                        <div className="row border1 bordercolor2_4">
                            <div className="col-auto  d-flex align-items-center border_right1 bordercolor2_4" onClick={() => decQty()}>
                                <TiMinus className='fs-2' />
                            </div>
                            <div className="col-auto d-flex align-items-center text-center border_right1 bordercolor2_4 fs-2">{qty}</div>
                            <div className="col-auto d-flex align-items-center border_right1 bordercolor2_4" onClick={() => incQty()}>
                                <TiPlus className='fs-2' />
                            </div>
                            <div className="col-auto d-flex align-items-center border_right1 bordercolor2_4"> {product}</div>
                            <div className="col-auto d-flex align-items-center border_right1 bordercolor2_4">INR {amount}</div>
                            <div className="col-auto d-flex align-items-center border_right1 bordercolor2_4"> Items {qty}  </div>
                            <div className="col-auto d-flex align-items-center"> Total Price  {amount * qty} </div>
                            <div className="col-auto d-flex align-items-center"> Total Price  {amount * qty} </div>
                        </div>
                        <div className="col-12">  {stock === qty && <h3> Available products in stock is {qty}  </h3>}</div>
                    </div>


                </div>


            </div>
        </Fragment>
    )
}

export default ScriptIndex1