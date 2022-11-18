import React, { Fragment } from 'react'

type TextAreaProps = {
    labelText?: string;
    labelStyleClass?: string;
    formStyleClass?: string;
    inputStyleClass?: string;
    inputStyleId?: string;
    autoComplete?: string;
    name?: string;
    value?: string | number;
    rows?: any;
    readOnly?: boolean;
    placeholder?: string;
    disabled?: boolean;
    onChange?: (event: any) => void;
}

function TextArea(props: TextAreaProps) {
    const { labelText, labelStyleClass, formStyleClass,
        inputStyleClass, inputStyleId, name, value, rows, placeholder, autoComplete, readOnly, disabled, onChange } = props
    return (
        <Fragment>
            {labelText !== "" && <label className={`ovr ${labelStyleClass}`} > {labelText}</label>}
            <div className={`forms ${formStyleClass ? formStyleClass : "border1 bordercolor2_4"}`}>
                <textarea
                    className={`tera ${inputStyleClass}`}
                    id={inputStyleId}
                    name={name}
                    value={value}
                    rows={rows}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    readOnly={readOnly}
                    disabled={disabled}
                    onChange={onChange}
                />
            </div>
        </Fragment>
    )
}

export default TextArea;

TextArea.defaultProps = {
    AutoComplete: "off",
    disabled: false,
    readOnly: false,
}

{/* 
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
    readOnly={true}
    disabled={true}
    onChange={(event) => { onChangeHandler(event) }}
    />

*/}