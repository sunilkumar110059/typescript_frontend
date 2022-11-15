import React, { Fragment, useState } from 'react';
import { TiPlus, TiMinus } from 'react-icons/ti';

function ScriptIndex1() {


    const [CartState, SetCart] = useState({
        product: "Redmi Phone",
        stock: 10,
        qty: 1,
        amount: 70
    })

    const { stock, qty, amount } = CartState


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
                {<h1> Product Amount {amount * qty} </h1>}

                <div className="row">

                    <div className="col-2">
                        <div className="row border1 bordercolor2_4 justify-content-center align-items-center">
                            <div className="col-auto" onClick={() => decQty()}>
                                <TiMinus className='fs-2' />
                            </div>
                            <div className="col text-center border_left1 border_right1 bordercolor2_4 fs-2">{qty}</div>
                            <div className="col-auto" onClick={() => incQty()}>
                                <TiPlus className='fs-2' />
                            </div>
                        </div>
                    </div>

                </div>

                {stock === qty && <h1> Stock Full </h1>}
            </div>
        </Fragment>
    )
}

export default ScriptIndex1