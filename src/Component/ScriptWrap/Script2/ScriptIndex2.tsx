import React, { Fragment, useEffect, useReducer } from 'react';
import axios from 'axios';
import { ENUMS } from './types';
import { reducerFn } from './reducerFun';
import Sorting from './Sorting';

const intialState = {
    post: [],
    isLoading: false,
    isErorr: false,
    sortValue: "Price(Lowest)"
}


function ScriptIndex2() {
    const [state, dispatch] = useReducer(reducerFn, intialState)

    const getApiData = async () => {
        dispatch({ type: ENUMS.LOADING })
        try {
            let res = await axios.get('https://www.api.pujakaitem.com/api/products')
            let result = await res.data
            dispatch({ type: ENUMS.GET_DATA, payload: result })
        }
        catch (err) {
            dispatch({ type: ENUMS.ERRORS })
        }
    }


    const getSortValue = (sortstr: string) => {
        dispatch({ type: ENUMS.SORTING_VALUE, payload: sortstr })
    }

    useEffect(() => {
        dispatch({ type: ENUMS.SORT_PRODUCTS, payload: state.post })
    }, [state.post, state.sortValue])


    useEffect(() => {
        getApiData()
    }, [])

    return (
        <Fragment>
            <div className="cover bg2_5 px-3 border1 bordercolor2_4 mb-4">
                <div className="row">
                    <div className="col py-1"> <h1>Sorting Product by useReducer  </h1> </div>
                    <div className="col-auto py-1 border_left1 bordercolor2_4 d-flex align-items-center"> Script 2 </div>
                </div>
            </div>
            <div className='container'>

                <div className="cover">
                    <Sorting
                        getSortValue={getSortValue}
                    />
                </div>

                <div className="cover">


                    {state.isLoading && <h1>Loading ...</h1>}
                    {state.isErorr && <h1>Error ...</h1>}


                    <div className="row">
                        {state.post && state.post.map((prod, index) => {
                            const { image, name, price } = prod
                            return (
                                <div className="col-3 mb-4" key={index}>
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
                </div>




            </div>
        </Fragment>
    )
}

export default ScriptIndex2