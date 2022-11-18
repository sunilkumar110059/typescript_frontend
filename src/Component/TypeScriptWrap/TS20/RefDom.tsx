import React, { useEffect, useRef } from 'react'
import { Input } from '../../../Shared/SharedComponentPath'

function RefDoms() {
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        let abc = inputRef.current?.focus()
        console.log(abc)
    }, [inputRef])
    return (
        <div className='cover'>

            <div className="row">
                <div className="col">
                    {/* <InputStyle
                        LabelAddClass="d-block mb-1 fw-bold"
                        LabelText="Input Current Focus"
                        FormAddClass="border1 bordercolor2_4"
                        InputAddClass="p-2"
                        InputType="text"
                        useRefText={inputRef}

                    /> */}


                    <Input
                        labelText={'Input Current Focus'}
                        labelStyleClass={'d-block mb-1 fw-bold'}
                        formStyleClass={'border1 bordercolor2_4'}
                        inputStyleClass={'p-2'}
                        inputStyleId={'firstname'}
                        autoComplete={'on'}
                        type={'text'}
                        ref={inputRef}
                    
                    />


                </div>

            </div>

        </div>
    )
}

export default RefDoms