import React, { Fragment } from 'react';
import { AiFillDownCircle } from 'react-icons/ai';

type SelectBoxProps = {
    labelText?: string;
    labelStyleClass?: string;
    formStyleClass?: string;
    selectStyleClass?: string;
    selectStyleId?: string;
    name?: string;
    value?: string | number
    optionData?: any;
    placeholder?: string;
    disabled?: boolean;
    directionIcon?: string;
    onChange?: (event: any) => void
}

function SelectBox(props: SelectBoxProps) {
    const { labelText, labelStyleClass, formStyleClass,
        selectStyleClass, selectStyleId, name, value, disabled, placeholder, optionData, directionIcon, onChange } = props

    return (
        <Fragment>
            {labelText && <label className={`ovr ${labelStyleClass}`} htmlFor={selectStyleId} > {labelText}</label>}
            <div className={`forms ${formStyleClass ? formStyleClass : "border1 bordercolor2_4"}`}>

                <span className={directionIcon}> {<AiFillDownCircle />}</span>
                <select
                    className={`selects ${selectStyleClass}`}
                    id={selectStyleId}
                    name={name}
                    value={value}
                    disabled={disabled}
                    onChange={onChange}
                >
                    {placeholder && <option value='' className='d-none'> {placeholder} </option>}
                    {optionData}
                </select>
            </div>
        </Fragment>
    )
}

export default SelectBox

SelectBox.defaultProps = {
    disabled: false,
    directionIcon: "right_icon"
}
{/*  
    <SelectBox
    directionIcon={'right_icon bg1'}
    labelStyleClass={'d-block mb-1 fw-bold'}
    labelText={'Select Box'}
    formStyleClass={'border1 bordercolor2_4'}
    selectStyleClass={'Add_inputClass'}
    selectStyleId={'selectId'}
    name={'selectitem'}
    placeholder={'Placeholder Text'}
    disabled={true}
    onChange={(event) => onChangeHandler(event)}
    optionData={["Lunch", "Dinner", "Breakfast", "Evening"].map((item, index) => (
    <option value={item} key={index}> {item} </option>
    ))
    }/>
*/}