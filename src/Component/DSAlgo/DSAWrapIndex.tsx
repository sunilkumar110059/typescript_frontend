import React, { Fragment } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import { ROUTE_PAGES } from '../../Constant/RoutePath/RoutePathIndex';

function DSAWrapIndex() {
    const List = [
        { name: "DSA 1", path: ROUTE_PAGES.DSA1_PATH },
        { name: "DSA 2", path: ROUTE_PAGES.DSA2_PATH },
        { name: "DSA 3", path: ROUTE_PAGES.DSA3_PATH },
        { name: "DSA 4", path: ROUTE_PAGES.DSA4_PATH },
        { name: "DSA 5", path: ROUTE_PAGES.DSA5_PATH },
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

export default DSAWrapIndex