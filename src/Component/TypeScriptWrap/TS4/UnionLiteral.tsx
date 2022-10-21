import React from 'react'

type UnionLiteralProps = {
    // union string literal
    status: "LOADING" | "SUCCESS" | "ERROR"
}

function UnionLiteral(props: UnionLiteralProps) {
    const { status } = props

    let message

    if (status === "LOADING") {
        message = "Data is Loading..."
    }
    else if (status === "SUCCESS") {
        message = "Data is Success"
    }
    else if (status === "ERROR") {
        message = "Something Error Occur"
    }
    else {
        message = "Please Select Right Keyword"
    }

    return (

        <div className='cover'>
            {status === "LOADING" && <h1 className='color2_1'> {message}</h1>}
            {status === "SUCCESS" && <h1 className='color4_1'> {message}</h1>}
            {status === "ERROR" && <h1 className='color3_1'> {message}</h1>}
            {(status !== "LOADING" && status !== "SUCCESS" && status !== "ERROR") && <h1 className='color3_1'> {message}</h1>}
        </div>
    )
}

export default UnionLiteral