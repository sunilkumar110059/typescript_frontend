import React, { Fragment, useState } from 'react'
import UnionLiteral from './UnionLiteral'
import { SelectBox } from '../../../Shared/SharedComponentPath';

function TS4() {
    const [StatusState, SetStatusFn] = useState<any>("")
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        SetStatusFn(event.target.value)
    }

    return (
        <Fragment>
            <div className="cover bg2_5 px-3 border1 bordercolor2_4 mb-4">
                <div className="row">
                    <div className="col-auto py-1"> <h1>TS 4 </h1></div>
                    <div className="col py-1 d-flex align-items-center">  <h2 className='color3_1'> Union String Literal</h2> </div>
                    <div className="col-auto py-1 border_left1 bordercolor2_4 d-flex align-items-center"> TS 4</div>
                </div>
            </div>

            <div className='container'>
                <div className="row">
                    <div className="col">
                

                        <SelectBox
                            directionIcon={'right_icon bg1'}
                            labelStyleClass={'d-block mb-1 fw-bold'}
                            labelText={'Select One'}
                            formStyleClass={'border1 bordercolor2_4'}
                            selectStyleClass={'Add_inputClass'}
                            selectStyleId={'selectId'}
                            name={'selectitem'}
                            placeholder={'Placeholder Text'}
                            optionData={["LOADING", "SUCCESS", "ERROR"].map((item, index) => (
                                <option value={item} key={index}> {item} </option>
                            ))
                            }
                            onChange={(event) => onChangeHandler(event)}
                        />

                    </div>
                    <div className="col">
                        <UnionLiteral
                            status={StatusState}
                        />
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default TS4