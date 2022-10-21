import React from 'react'

type HeadingProps = {
    //  children: string
    children: React.ReactNode;
}

function Heading(props: HeadingProps) {
    return (
        <div className="cover">
            <h1>Heading Component</h1>
            <div>{props.children} </div>
        </div>

    )
}

export default Heading