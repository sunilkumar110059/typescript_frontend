import React, { useState } from 'react'
import { BsCheckCircleFill, BsCircleFill } from 'react-icons/bs';

function ColorFilter({ state, color_filter }: any) {
    const { products } = state;

    const colorArray = products.map((elm: any) => {
        return elm.colors
    })

    // flat nested array  logic 1
    let colorfilter = ["All", ...new Set([].concat(...colorArray))]

    // flat nested array  logic 2
    // let colorfilter2 = colorfilter.flat()
    // colorfilter2 = ["All", ...new Set(colorfilter2)]
    // console.log(colorfilter2)


    const [ColorState, SetColorState] = useState('')

    const colorFilter = (color: string) => {
        color_filter(color)
        SetColorState(color)
    }

    return (
        <div className='row g-2'>
            <div className='col-12 cursor-pointer fw-bold mb-1'>Colors</div>
            {colorfilter.map((color, index) => {
                return (
                    <div className='col-auto' key={index}>
                        {color === "All" ?
                            (<div className='cursor-pointer' onClick={() => colorFilter(color)}>All</div>)
                            : (
                                <div className='cursor-pointer fs-5' onClick={() => colorFilter(color)}>
                                    {ColorState === color ?
                                        <BsCheckCircleFill style={{ color: color }} />
                                        : <BsCircleFill style={{ color: color }} />}
                                </div>

                            )
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default ColorFilter