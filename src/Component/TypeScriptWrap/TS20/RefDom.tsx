import React, { useEffect, useRef } from 'react'
import { Input } from '../../../Shared/SharedComponentPath'

function RefDoms() {
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        let abc = inputRef.current?.focus()
        console.log(abc)
    }, [])
    return (
        <div className='cover'>

            <div className="row">
                <div className="col">
                    <Input
                        LabelAddClass="d-block mb-1 fw-bold"
                        LabelText="Input Current Focus"
                        FormAddClass="border1 bordercolor2_4"
                        InputAddClass="p-2"
                        InputType="text"
                        useRefText={inputRef}

                    />

                </div>

            </div>

        </div>
    )
}

export default RefDoms