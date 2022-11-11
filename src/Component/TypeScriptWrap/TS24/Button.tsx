import React from 'react'

type ButtonProps = {
    variants: "primary_btn" | "secondary_btn" | null;
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'>


function Button(props: ButtonProps) {
    const { variants, children, ...rest } = props
    return (
        <div className='cover'>
            <h1 className='mb-4'> Create dyanmic class "name" only use "button" element with children</h1>
            <button className={`${variants}`} {...rest}> {children} </button>
        </div>

    )
}

export default Button