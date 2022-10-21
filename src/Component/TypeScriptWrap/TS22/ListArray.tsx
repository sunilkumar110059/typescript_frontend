import React from 'react'

type ListArrayProps<T> = {
    items: T[]
    heading: string
}


function ListArray<T extends string | number | boolean>({ items, heading }: ListArrayProps<T>) {
    return (
        <div className="row">
            <div className='col-12 mb-2'> <h1>{heading} </h1></div>
            {items.map((item, index) => {
                return (
                    <div className='col-auto' key={index}> <div className='p-2 bg2_4'>{item} </div></div>
                )
            })}
        </div>
    )
}

export default ListArray