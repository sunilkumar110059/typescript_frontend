import React, { Fragment } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import { ROUTE_PAGES } from '../../Constant/RoutePath/RoutePathIndex';

function HOCWrapIndex() {
    const List = [
        { name: "HOC 1", path: ROUTE_PAGES.HOC1_PATH },
        { name: "HOC 2", path: ROUTE_PAGES.HOC2_PATH },
        { name: "HOC 3", path: ROUTE_PAGES.HOC3_PATH },
        { name: "HOC 4", path: ROUTE_PAGES.HOC4_PATH },
        { name: "HOC 5", path: ROUTE_PAGES.HOC5_PATH },
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

export default HOCWrapIndex