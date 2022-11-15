import React, { Fragment } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import { ROUTE_PAGES } from '../../Constant/RoutePath/RoutePathIndex';

function ScriptWrapIndex() {
    const List = [
        { name: "Script 1", path: ROUTE_PAGES.SCRIPT1_PATH },
        { name: "Script 2", path: ROUTE_PAGES.SCRIPT2_PATH },
        { name: "Script 3", path: ROUTE_PAGES.SCRIPT3_PATH },
        { name: "Script 4", path: ROUTE_PAGES.SCRIPT4_PATH },
        { name: "Script 5", path: ROUTE_PAGES.SCRIPT5_PATH },
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

export default ScriptWrapIndex