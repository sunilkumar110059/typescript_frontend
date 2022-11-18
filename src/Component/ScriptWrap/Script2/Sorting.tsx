import React from 'react'
import { SelectBox } from '../../../Shared/SharedComponentPath'


type SortingProps = {
    getSortValue: (sortvalue: string) => void
}

function Sorting(props: SortingProps) {
    const { getSortValue } = props

    const sortingHanlder = (event: any) => {
        getSortValue(event.target.value)
    }

    return (
        <div className='mb-3'>
            <SelectBox
                directionIcon={'right_icon bg1'}
                labelStyleClass={'d-block mb-1 fw-bold'}
                labelText={'Sorting'}
                formStyleClass={'border1 bordercolor2_4'}
                selectStyleClass={'Add_inputClass'}
                selectStyleId={'selectId'}
                name={'sortprod'}
                optionData={["Price(Lowest)", "Price(Highest)", "Price(A-Z)", "Price(Z-A)"].map((item, index) => (
                    <option value={item} key={index}> {item} </option>
                ))
                }
                onChange={(event) => sortingHanlder(event)}
            />

        </div>
    )
}

export default Sorting