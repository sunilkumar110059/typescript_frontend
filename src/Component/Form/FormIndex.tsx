import React, { Fragment, useState } from 'react';

import { Button, Input, SelectBox, TextArea, CheckBox } from '../../Shared/SharedComponentPath';

const aminity = ['Swiming Pool', 'Laundry and Dry Cleaner', 'Car Rental', "WiFi", 'Hair Dresser', 'Meals']

function FormIndex() {
    const [AminityState, SetAminityFun] = useState<any[]>([])
    // console.log(AminityState)

    const [State, setStateFn] = useState({
        firstname: "",
        lastname: "",
        selectitem: "",
        selectitem2: "",
        discription: "",
        services: [AminityState]
    })
    const { firstname, lastname, selectitem, selectitem2, discription } = State;
    // console.log(State)

    const checkBoxHandler = (event: any) => {
        const { name, value, checked } = event.target
        SetAminityFun({
            ...AminityState,
            [name]: checked ? value : ""
        })
    }

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setStateFn({
            ...State,
            [name]: value,
        })
    }

    
    const buttonHandler = (btn: string) => { console.log(btn) }
    return (
        <Fragment>
            <div className="cover bg2_5 px-3 border_bottom1 bordercolor2_4 mb-4">
                <div className="row">
                    <div className="col py-1"> <h1>Form Field </h1> </div>
                    <div className="col-auto py-1 border_left1 bordercolor2_4 d-flex align-items-center"> Form </div>
                </div>
            </div>
            <div className='container'>

                <div className="cover mb-4">
                    <div className="row align-items-end">
                        {aminity.map((elm, index) => (
                            <div className="col-12 mb-2" key={index}>
                                <CheckBox
                                    labelText={elm}
                                    name={elm}
                                    value={elm}
                                    onChange={(event) => checkBoxHandler(event)}
                                />
                            </div>
                        ))}


                    </div>
                </div>




                <div className="cover mb-4">
                    <div className="row align-items-end">
                        <div className="col-3">
                            <SelectBox
                                directionIcon={'right_icon bg1'}
                                labelStyleClass={'d-block mb-1 fw-bold'}
                                labelText={'Select Box'}
                                formStyleClass={'border1 bordercolor2_4'}
                                selectStyleClass={'Add_inputClass'}
                                selectStyleId={'selectId'}
                                name={'selectitem'}
                                value={selectitem}
                                placeholder={'Placeholder Text'}
                                // disabled={true}
                                onChange={(event) => onChangeHandler(event)}
                                optionData={["Lunch", "Dinner", "Breakfast", "Evening"].map((item, index) => (
                                    <option value={item} key={index}> {item} </option>
                                ))
                                }
                            />
                        </div>


                        <div className="col-3">
                            <SelectBox
                                directionIcon={'right_icon bg1'}
                                labelStyleClass={'d-block mb-1 fw-bold'}
                                labelText={'Select Box'}
                                formStyleClass={'border1 bordercolor2_4'}
                                selectStyleClass={'Add_inputClass'}
                                selectStyleId={'selectId'}
                                name={'selectitem2'}
                                value={selectitem2}
                                placeholder={'Placeholder Text'}
                                // disabled={true}
                                onChange={(event) => onChangeHandler(event)}
                                optionData={["LOADING", "SUCCESS", "ERROR"].map((item, index) => (
                                    <option value={item} key={index}> {item} </option>
                                ))
                                }
                            />
                        </div>
                    </div>
                </div>


                <div className="cover mb-4">
                    <div className="row align-items-end">
                        <div className="col">
                            <TextArea
                                labelText={'Text Area'}
                                labelStyleClass={'d-block mb-1 fw-bold'}
                                formStyleClass={'border1 bordercolor2_4'}
                                inputStyleClass={'p-2'}
                                inputStyleId={'discriptionid'}
                                autoComplete={'on'}
                                name={'discription'}
                                value={discription}
                                rows={4}
                                placeholder={'Placeholder Text'}
                                //  readOnly={true}
                                // disabled={true}
                                onChange={(event) => { onChangeHandler(event) }}
                            />
                        </div>
                    </div>
                </div>


                <div className="cover mb-4">
                    <div className="row align-items-end">
                        <div className="col-3">
                            <Input
                                labelText={'Text With Label'}
                                labelStyleClass={'d-block mb-1 fw-bold'}
                                formStyleClass={'border1 bordercolor2_4'}
                                inputStyleClass={'p-2'}
                                inputStyleId={'firstNameId'}
                                autoComplete={'on'}
                                type={'text'}
                                name={'firstname'}
                                value={firstname}
                                onChange={(event) => { onChangeHandler(event) }}
                            />
                        </div>

                        <div className="col-3">
                            <Input
                                labelStyleClass={'d-block mb-1 fw-bold'}
                                formStyleClass={'border1 bordercolor2_4'}
                                inputStyleClass={'p-2'}
                                inputStyleId={'lastNameId'}
                                autoComplete={'on'}
                                type={'text'}
                                name={'lastname'}
                                value={lastname}
                                placeholder={'Placeholder Text'}
                                onChange={(event) => { onChangeHandler(event) }}
                            />
                        </div>
                    </div>
                </div>


                <div className="cover">
                    <div className="row">
                        <div className="col-auto">
                            <Button onClick={() => buttonHandler('btn_primary')} styleClass={`btn_primary`}> btn_primary </Button>
                        </div>

                        <div className="col-auto">
                            <Button onClick={() => buttonHandler('btn_secondary')} styleClass={`btn_secondary`}> btn_secondary </Button>
                        </div>

                        <div className="col-auto">
                            <Button onClick={() => buttonHandler('btn_success')} styleClass={`btn_success`}> btn_success </Button>
                        </div>

                        <div className="col-auto">
                            <Button onClick={() => buttonHandler('btn_info')} styleClass={`btn_info`}> btn_info</Button>
                        </div>


                        <div className="col-auto">
                            <Button onClick={() => buttonHandler('btn_warning')} styleClass={`btn_warning`}> btn_warning </Button>
                        </div>

                        <div className="col-auto">
                            <Button onClick={() => buttonHandler('btn_danger')} styleClass={`btn_danger`}> btn_danger </Button>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default FormIndex