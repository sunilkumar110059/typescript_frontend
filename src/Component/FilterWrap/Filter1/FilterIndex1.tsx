import React, { Fragment } from 'react';
import { Input, SelectBox } from '../../../Shared/SharedComponentPath';



function FilterIndex1() {

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target

        console.log(name, value)
    }

    return (
        <Fragment>
            <div className="cover bg2_5 px-3 border1 bordercolor2_4 mb-4">
                <div className="row">
                    <div className="col py-1"> <h1>Filter 1 </h1> </div>
                    <div className="col-auto py-1 border_left1 bordercolor2_4 d-flex align-items-center"> Filter 1 </div>
                </div>
            </div>
            <div className='container'>
                <div className="row">
                    <div className="col-3">
                        <div className='cover mb-4'>
                            <Input
                                labelStyleClass={'d-block mb-1 fw-bold'}
                                formStyleClass={'border1 bordercolor2_4'}
                                inputStyleClass={'p-2'}
                                inputStyleId={'firstNameId'}
                                autoComplete={'on'}
                                type={'text'}
                                name={'firstname'}
                                placeholder={'Search'}
                               // value={firstname}
                                onChange={(event) => { onChangeHandler(event) }}
                            />

                        </div>

                        <div className='cover mb-4'>
                            <div className='ovr'>Category</div>

                        </div>


                        <div className='cover mb-4'>
                            <SelectBox
                                directionIcon={'right_icon bg1'}
                                labelStyleClass={'d-block mb-1 fw-bold'}
                                labelText={'Company'}
                                formStyleClass={'border1 bordercolor2_4'}
                                selectStyleClass={'Add_inputClass'}
                                selectStyleId={'selectId'}
                                name={'selectitem'}
                                // value={selectitem}
                                //  placeholder={'Search'}
                                onChange={(event) => onChangeHandler(event)}
                                optionData={["All", "Lunch", "Dinner", "Breakfast", "Evening"].map((item, index) => (
                                    <option value={item} key={index}> {item} </option>
                                ))
                                }
                            />
                        </div>

                        
                        <div className='cover mb-4'>
                            <div className='ovr'>Color</div>

                        </div>

                        <div className='cover mb-4'>
                            <div className='ovr'>Price</div>

                        </div>

                    </div>
                    <div className="col-9">fds</div>
                </div>

            </div>
        </Fragment>
    )
}

export default FilterIndex1

