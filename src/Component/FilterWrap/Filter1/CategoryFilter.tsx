import React from 'react'

function CategoryFilter({ state, category_filter }: any) {
    const { products } = state;

    const category = products.map((elm: any) => {
        return elm.category
    })


    // filter duplicate products ==  logic 1
    let categoryProducts = ["All", ...new Set(category)]

    // Filter duplicate products ==  logic 2
    // let removeDuplicateProducts = category.filter((elm: any, index: number) => category.indexOf(elm) === index);
    // removeDuplicateProducts = ['All', ...removeDuplicateProducts]
    // console.log(removeDuplicateProducts)

    return (

        <div className='row text-capitalize'>
            <div className='col-12 cursor-pointer fw-bold mb-3'>Cateogry</div>
            {categoryProducts.map((curElem: any, index) => (
                <div className='col-12 cursor-pointer mb-2' key={index} onClick={() => category_filter(curElem)}>{curElem}</div>
            ))}
        </div>
    )
}

export default CategoryFilter