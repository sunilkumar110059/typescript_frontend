import React from 'react';
import { Input, SuccessButton } from '../../../Shared/SharedComponentPath';

type EventCompProps = {
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
    onSubmitHandler: (event: React.FormEvent<HTMLFormElement>) => void
    onClickHandler: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

function EventComp(props: EventCompProps) {
    const { onChangeHandler, onSubmitHandler, onClickHandler } = props
    return (
        <div className='cover'>
            <form onSubmit={(event) => onSubmitHandler(event)} >
                <div className='row align-items-end'>
                    <div className='col'>
                        <Input
                            LabelAddClass="d-block mb-1 fw-bold"
                            LabelText="onChange Event Handler"
                            FormAddClass="border1 bordercolor2_4"
                            InputAddClass="p-2"
                            InputType="text"
                            onChangeHandler={onChangeHandler}
                        />
                    </div>
                    <div className='col-auto'> <SuccessButton ButtonText='OnSubmit Handler' /></div>
                </div>
            </form>

            <div className='row mt-3'>
                <div className='col-auto'>
                    <SuccessButton
                        ButtonText='OnClick Handler'
                        onClickHandle={(event: React.MouseEvent<HTMLButtonElement>) => onClickHandler(event, 15)}
                    />
                </div>
            </div>

        </div>
    )
}

export default EventComp