import React from 'react'

type ListArrayObjectProps<T> = {
    ArrObjItems: T[]
    heading: string
}



function ListArrayObject<T extends { id: number, name: string }>({ ArrObjItems, heading }: ListArrayObjectProps<T>) {
    return (
        <div className="row">
            <div className='col-12 mb-2'> <h1>{heading} </h1></div>
            {ArrObjItems.map((item, index) => {
                return (
                    <div className='col-auto' key={index}>
                        <div className='p-2 bg2_4'>{item.id} </div>
                        <div className='p-2 bg2_4'>{item.name} </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ListArrayObject