import React, { Fragment } from 'react'
import { Input } from '../../../Shared/SharedComponentPath';


type SearchBarProps = {
    searchFilter: (val:string) => void
}


function SearchBar(props: SearchBarProps) {
    const { searchFilter } = props

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target       
        searchFilter(value)
    }

    return (
        <Fragment>
            <Input
                labelStyleClass={'d-block mb-1 fw-bold'}
                formStyleClass={'border1 bordercolor2_4'}
                inputStyleClass={'p-2'}
                inputStyleId={'firstNameId'}
                autoComplete={'on'}
                type={'text'}
                placeholder={'Search'}
                onChange={(event) => { onChangeHandler(event) }}
            />
        </Fragment>
    )
}

export default SearchBar