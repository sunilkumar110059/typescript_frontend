import React from 'react';
import { Input, Button } from '../../../Shared/SharedComponentPath';

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
                            labelText={'onChange Event Handler'}
                            labelStyleClass={'d-block mb-1 fw-bold'}
                            formStyleClass={'border1 bordercolor2_4'}
                            inputStyleClass={'p-2'}
                            inputStyleId={'firstname'}
                            autoComplete={'on'}
                            type={'text'}
                            onChange={(event) => { onChangeHandler(event) }}
                        />
                    </div>
                    <div className='col-auto'>
                        <Button styleClass={`btn_primary`}> OnSubmit Handler </Button >

                    </div>
                </div>
            </form>

            <div className='row mt-3'>
                <div className='col-auto'>

                 
                    <Button
                        styleClass={`btn_primary`}
                        onClick={(event) => onClickHandler(event, 15)}>
                        OnClick Handler </Button >
                </div>
            </div>

        </div>
    )
}

export default EventComp