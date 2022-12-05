import React, { Fragment } from 'react';


type Input = {
    labelText?: string;
    labelStyleClass?: string;
    formStyleClass?: string;
    inputStyleClass?: string;
    inputStyleId?: string;
    autoComplete?: string;
    type?: string;
    name?: string;
    value?: string | number;
    readOnly?: boolean;
    placeholder?: string;
    disabled?: boolean;
    ref?: any;
    onChange?: (event: any) => void
}

function InputStyle(props: Input) {
    const {
        labelText, labelStyleClass,
        formStyleClass,
        inputStyleClass, inputStyleId, autoComplete, type, name, value, readOnly, placeholder, disabled, ref, onChange } = props

    return (
        <Fragment>
            {labelText && <label className={`ovr ${labelStyleClass}`} htmlFor={inputStyleId} > {labelText}</label>}

            <div className={`forms ${formStyleClass ? formStyleClass : "border1 bordercolor2_4"}`}>
                <input
                    className={`inputs ${inputStyleClass}`}
                    id={inputStyleId}
                    autoComplete={autoComplete}
                    type={type}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    readOnly={readOnly}
                    disabled={disabled}
                    ref={ref}
                    onChange={onChange}
                />
            </div>
        </Fragment >
    )

};

export default InputStyle;

InputStyle.defaultProps = {
    AutoComplete: "off",
    type: "text",
    disabled: false,
    readOnly: false,

}

 
    // < Input
    // labelText = { 'Text With Label'}
    // labelStyleClass = { 'd-block mb-1 fw-bold'}
    // formStyleClass = { 'border1 bordercolor2_4'}
    // inputStyleClass = { 'p-2'}
    // inputStyleId = { 'inputid'}
    // autoComplete = { 'on'}
    // type = { 'text'}
    // name = { 'firstname'}
    // value = { 'Value Text'}
    // placeholder = { 'Placeholder Text'}
    // readOnly = { true}
    // disabled = { true}
    // ref={"domtext"}
    // onChange = {() => { onChangeHandler() }}
    // /> 



