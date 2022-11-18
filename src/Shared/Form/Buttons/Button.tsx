import React from 'react';

type ButtonProps = {
    styleClass?: string;
    disabled?: boolean;
    children?: React.ReactNode;
    onClick?: (event: any) => void;
}

function Button({ styleClass, disabled, children, onClick }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`btn ${styleClass}`}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button;


Button.defaultProps = {
    styleClass: "btn_primary",
    // disabled:true
}


// <Button
// onClick = {() => buttonHandler()}
// disabled={true}
// styleClass = {`btn_primary`}>  Primary </Button >