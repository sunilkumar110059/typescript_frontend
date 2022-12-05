import React, { Fragment, useEffect, useReducer } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import CompanyFilter from './CompanyFilter';
import ColorFilter from './ColorFilter';
import Products from './Products';
import PriceFilter from './PriceFilter';
import { reducerFun } from './Reducer';
import { ENUMS } from './types';


const initialState = {
    products: [],
    filter_products: [],
    isLoading: false,
    isError: false,
}



function FilterIndex1() {
    const [state, dispatch] = useReducer(reducerFun, initialState)


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


    const searchFilter = (val: string) => {
        dispatch({ type: ENUMS.SEARCH_FILTER, payload: val })
    }

    const category_filter = (val: string) => {
        dispatch({ type: ENUMS.CATEGORY_FILTER, payload: val }) 
    }

    const company_filter = (val: string) => {
        dispatch({ type: ENUMS.COMPANY_FILTER, payload: val }) 
    }

    const color_filter = (val: string) => {
        dispatch({ type: ENUMS.COLOR_FILTER, payload: val }) 
    }



    useEffect(() => {
        getApiData()
    }, [])


    return (
        <Fragment>
            <div className="cover bg2_5 px-3 border_top1 border_bottom1 bordercolor2_4 mb-4">
                <div className="row">
                    <div className="col py-1"> <h1>Filter 1 </h1> </div>
                    <div className="col-auto py-1 border_left1 bordercolor2_4 d-flex align-items-center"> Filter 1 </div>
                </div>
            </div>
            <div className='container'>
                <div className="row">
                    <div className="col-3">
                        <div className='cover mb-4'>
                            <SearchBar
                                searchFilter={searchFilter}
                            />
                        </div>

                        <div className='cover mb-4'>
                            <CategoryFilter
                                state={state}
                                category_filter={category_filter}
                            />
                        </div>

                        <div className='cover mb-4'>
                            <CompanyFilter
                                state={state}
                                company_filter={company_filter}
                            />
                        </div>

                        <div className='cover mb-4'>
                            <ColorFilter
                                state={state}
                                color_filter={color_filter}
                            />
                        </div>

                        <div className='cover mb-4'>
                            <PriceFilter />
                        </div>
                    </div>

                    <div className="col-9"> <Products state={state} /></div>
                </div>

            </div>
        </Fragment>
    )
}

export default FilterIndex1

