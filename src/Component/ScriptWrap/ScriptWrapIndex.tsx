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
        { name: "Script 6", path: ROUTE_PAGES.SCRIPT6_PATH },
        { name: "Script 7", path: ROUTE_PAGES.SCRIPT7_PATH },
        { name: "Script 8", path: ROUTE_PAGES.SCRIPT8_PATH },
        { name: "Script 9", path: ROUTE_PAGES.SCRIPT9_PATH },
        { name: "Script 10", path: ROUTE_PAGES.SCRIPT10_PATH },
        { name: "Script 11", path: ROUTE_PAGES.SCRIPT11_PATH },
        { name: "Script 12", path: ROUTE_PAGES.SCRIPT12_PATH },
        { name: "Script 13", path: ROUTE_PAGES.SCRIPT13_PATH },
        { name: "Script 14", path: ROUTE_PAGES.SCRIPT14_PATH },
        { name: "Script 15", path: ROUTE_PAGES.SCRIPT15_PATH },    
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