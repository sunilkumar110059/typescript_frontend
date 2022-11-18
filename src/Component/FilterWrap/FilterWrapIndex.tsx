import React, { Fragment } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import { ROUTE_PAGES } from '../../Constant/RoutePath/RoutePathIndex';

function FilterWrapIndex() {
    const List = [
        { name: "Filter 1", path: ROUTE_PAGES.FILTER1_PATH },
        { name: "Filter 2", path: ROUTE_PAGES.FILTER2_PATH },
        { name: "Filter 3", path: ROUTE_PAGES.FILTER3_PATH },
        { name: "Filter 4", path: ROUTE_PAGES.FILTER4_PATH },
        { name: "Filter 5", path: ROUTE_PAGES.FILTER5_PATH },
    ]

    return (
        <Fragment>
            <div className='cover mt-4 nested_tab'>
                <div className='row'>
                    {List.map((curElem, index) => (
                        <div className="col-auto" key={index} >
                            <NavLink className='py-1 px-2 d-block bg2_5' to={curElem.path}> {curElem.name} </NavLink>
                        </div>
                    ))
                    }
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default FilterWrapIndex