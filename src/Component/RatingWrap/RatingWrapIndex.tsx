import React, { Fragment } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import { ROUTE_PAGES } from '../../Constant/RoutePath/RoutePathIndex';

function TabWrapIndex() {
    const List = [
        { name: "Rating 1", path: ROUTE_PAGES.RATING1_PATH },
        { name: "Rating 2", path: ROUTE_PAGES.RATING2_PATH },
        { name: "Rating 3", path: ROUTE_PAGES.RATING3_PATH },
        { name: "Rating 4", path: ROUTE_PAGES.RATING4_PATH },
        { name: "Rating 5", path: ROUTE_PAGES.RATING5_PATH },
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

export default TabWrapIndex