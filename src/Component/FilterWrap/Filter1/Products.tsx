import React from 'react';

function Products({ state }: any) {
    const { filter_products, isError, isLoading } = state;
    return (
        <div className="cover">
            {isLoading && <h1>Loading ...</h1>}
            {isError && <h1>Error ...</h1>}
            <div className="row">
                {filter_products && filter_products.map((prod: any, index: number) => {
                    const { image, name, price } = prod
                    return (
                        <div className="col-4 mb-4" key={index}>
                            <div className="row h-100">
                                <div className="col-12">
                                    <div className="cover">
                                        <figure>
                                            <img src={image} alt={name} />
                                        </figure>
                                    </div>
                                </div>
                                <div className="col d-flex align-items-end">{name}</div>
                                <div className="col-auto d-flex align-items-end">{price}</div>
                            </div>
                        </div>
                    )
                })}

            </div>

            {!isLoading && filter_products.length <= 0 && <h1>No Data</h1>}
        </div>
    )
}
export default Products