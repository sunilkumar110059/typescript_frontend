import React, { Fragment } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import { ROUTE_PAGES } from '../../Constant/RoutePath/RoutePathIndex';

function OOPWrapIndex() {
    const List = [
        { name: "OOP 1", path: ROUTE_PAGES.OOP1_PATH },
        { name: "OOP 2", path: ROUTE_PAGES.OOP2_PATH },
        { name: "OOP 3", path: ROUTE_PAGES.OOP3_PATH },
        { name: "OOP 4", path: ROUTE_PAGES.OOP4_PATH },
        { name: "OOP 5", path: ROUTE_PAGES.OOP5_PATH },
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

export default OOPWrapIndex