import React from 'react'

type InputElmProps = React.ComponentProps<"input">

function InputElm(props: InputElmProps) {
    return (

        <div className='cover mb-5'>
            <h1 className='mb-4'> Input Props pass without "type assign" but only props pass for "input" element</h1>
            <input {...props} />
        </div>
    )
}

export default InputElm