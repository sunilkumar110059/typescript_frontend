import React, { Fragment, useState } from 'react';
import { BsCheckLg } from 'react-icons/bs';

const colors = ['#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed', '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0']

function TabIndex1() {

    const [ColorState, SetColorFun] = useState(colors[0])

    const colorHandler = (color: string) => {
        SetColorFun(color)
    }

    return (
        <Fragment>
            <div className="cover bg2_5 px-3 border1 bordercolor2_4 mb-4">
                <div className="row">
                    <div className="col py-1"> <h1>On Click Active with Array Loop </h1> </div>
                    <div className="col-auto py-1 border_left1 bordercolor2_4 d-flex align-items-center"> Tab 1 </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    {colors.map((color, index) => {
                        return (
                            <div className="col-auto w-25 h-25" key={index}>
                                <div className="p-3 h-100" onClick={() => colorHandler(color)} style={{ backgroundColor: color }}>
                                    {color === ColorState ? <BsCheckLg /> : null}
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className='cover p-5' style={{ backgroundColor: ColorState }}></div>
            </div>
        </Fragment>
    )
}

export default TabIndex1