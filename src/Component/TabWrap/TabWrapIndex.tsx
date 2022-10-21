import React, { Fragment } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import { ROUTE_PAGES } from '../../Constant/RoutePath/RoutePathIndex';

function TabWrapIndex() {
    const List = [
        { name: "Tab 1", path: ROUTE_PAGES.TAB1_PATH },
        { name: "Tab 2", path: ROUTE_PAGES.TAB2_PATH },
        { name: "Tab 3", path: ROUTE_PAGES.TAB3_PATH },
        { name: "Tab 4", path: ROUTE_PAGES.TAB4_PATH },
        { name: "Tab 5", path: ROUTE_PAGES.TAB5_PATH },
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