import React, { Fragment, useState } from 'react'
import Button from './Button'
import InputElm from './InputElm'

function TS24() {

    const [InputText, SetInputText] = useState('Loren')

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        SetInputText(event.target.value)
    }
    return (
        <Fragment>
            <div className="cover bg2_5 px-3 border1 bordercolor2_4 mb-4">
                <div className="row">
                    <div className="col-auto py-1"> <h1>TS 24</h1></div>
                    <div className="col py-1 d-flex align-items-center">
                        <h2 className='color3_1'>Custom Component Wrap Children Element </h2>
                    </div>
                    <div className="col-auto py-1 border_left1 bordercolor2_4 d-flex align-items-center"> TS 24</div>
                </div>
            </div>

            <div className='container'>

                <InputElm
                    type="text"
                    value={InputText}
                    style={{ width: "100%" }}
                    className="bg2 p-2 border1 bordercolor2_4"
                    onChange={onChangeHandler}
                    
                />

                <Button variants={"primary_btn"}>  Primary Button </Button>



            </div>
        </Fragment>
    )
}

export default TS24