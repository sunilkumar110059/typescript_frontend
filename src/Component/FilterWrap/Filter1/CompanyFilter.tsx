import React from 'react'
import { SelectBox } from '../../../Shared/SharedComponentPath'

function CompanyFilter({ state, company_filter }: any) {
    const { products } = state;


    const companyfilter = products.map((elm: any) => {
        return elm.company
    })

    // filter duplicate products ==  logic 1
    let company = ["All", ...new Set(companyfilter)]

    // Filter duplicate products ==  logic 2
    // let removeDuplicateProducts = compnayfilter.filter((elm: any, index: number) => compnayfilter.indexOf(elm) === index);
    // removeDuplicateProducts = ['All', ...removeDuplicateProducts]
    // console.log(removeDuplicateProducts)


    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        company_filter( event.target.value)
    }

    return (
        <SelectBox
            directionIcon={'right_icon bg1'}
            labelStyleClass={'d-block mb-1 fw-bold'}
            labelText={'Company'}
            formStyleClass={'border1 bordercolor2_4'}
            selectStyleClass={'text-capitalize'}
            onChange={(event) => onChangeHandler(event)}
            optionData={company.map((item: any, index) => (
                <option value={item} key={index}> {item} </option>
            ))
            }
        />
    )
}

export default CompanyFilter