import React, { Fragment } from 'react'
import EventComp from './EventComp'

function TS7() {

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("OnChange Handler ====", event.target.value)
    }

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log("onSubmit Handler ====", event)
    }

    const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>, id:number) => {
        console.log("OnClick Handler ====", event)
        console.log("OnClick id ====", id)
    }


    return (
        <Fragment>
            <div className="cover bg2_5 px-3 border1 bordercolor2_4 mb-4">
                <div className="row">
                    <div className="col-auto py-1"> <h1>TS 7 </h1></div>
                    <div className="col py-1 d-flex align-items-center">  <h2 className='color3_1'>All Event Pass By Props</h2> </div>
                    <div className="col-auto py-1 border_left1 bordercolor2_4 d-flex align-items-center"> TS 7</div>
                </div>
            </div>

            <div className='container'>

                <EventComp
                    onChangeHandler={onChangeHandler}
                    onSubmitHandler={onSubmitHandler}
                    onClickHandler={onClickHandler}
                />

            </div>
        </Fragment>
    )
}

export default TS7