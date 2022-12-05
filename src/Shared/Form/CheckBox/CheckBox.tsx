import React, { Fragment, useState } from 'react';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';

type CheckBoxProps = {
    labelText?: string;
    checkTextPosition?: boolean;
    name?: string;
    value?: string | number;
    checked?: boolean;
    disabled?: boolean;

    onChange?: (event: any) => void
}

function CheckBox(props: CheckBoxProps) {
    const { labelText, name, value, disabled, checkTextPosition, onChange } = props


    const [checkState, setCheckFun] = useState<boolean>(false)

    const checkboxHanlder = (e: any) => {
        setCheckFun(e.target.checked)
    }

    return (
        <Fragment>
            <label className={`checkbox ${disabled ? "color3_1" : ""}`} onChange={(e) => checkboxHanlder(e)}>

                {labelText && checkTextPosition === true && <div className='checkbox_childs text_right'> {labelText}</div>}
                {checkState ? <ImCheckboxChecked className='fs-5' /> : <ImCheckboxUnchecked className='fs-5' />}
                {labelText && checkTextPosition === false && <div className='checkbox_childs text_left'> {labelText}</div>}

                <input
                    className='d-none'
                    name={name}
                    type='checkbox'
                    value={value}
                    disabled={disabled}
                    onChange={onChange}
                />
            </label>
        </Fragment>
    )
}

export default CheckBox

CheckBox.defaultProps = {
    disabled: false,
    checkTextPosition: false
}

 
    // <CheckBox
    // labelText={'Check Box Text'}
    // name={'chargingpoint'}
    // value={"Charging Point"}
    // disabled={true}
    // checkTextPosition={false}
    // onChange={(event) => checkBoxHandler(event)}
    // />            


