import React from 'react'

type HorizontalPosition = "left" | "center" | "right"
type VerticalPosition = "top" | "center" | "bottom"

type ToastProps = {
    position: Exclude<
        `${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | "center"
}

function Toast(props: ToastProps) {
    const { position } = props
    return (
        <div className="cover">
            <h3>Create dyanmic union "string Literal" that is called template literal with exclude keyword</h3>
            <h1>String Literal  Position is === {position}</h1>
        </div>
    )
}

export default Toast