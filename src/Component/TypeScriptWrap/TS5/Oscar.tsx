import React from 'react'

type OscarProps = {
    children: React.ReactNode;
}

function Oscar(props: OscarProps) {
    return (

        <div className='mt-4'>
            <h1>Oscar Component</h1>
            {props.children}</div>
    )
}

export default Oscar