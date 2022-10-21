import React, { Fragment } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import { ROUTE_PAGES } from '../../Constant/RoutePath/RoutePathIndex';

function TSWrapIndex() {
    const List = [
        { name: "TS 1", path: ROUTE_PAGES.TS1_PATH },
        { name: "TS 2", path: ROUTE_PAGES.TS2_PATH },
        { name: "TS 3", path: ROUTE_PAGES.TS3_PATH },
        { name: "TS 4", path: ROUTE_PAGES.TS4_PATH },
        { name: "TS 5", path: ROUTE_PAGES.TS5_PATH },
        { name: "TS 6", path: ROUTE_PAGES.TS6_PATH },
        { name: "TS 7", path: ROUTE_PAGES.TS7_PATH },
        { name: "TS 8", path: ROUTE_PAGES.TS8_PATH },
        { name: "TS 9", path: ROUTE_PAGES.TS9_PATH },
        { name: "TS 10", path: ROUTE_PAGES.TS10_PATH },
        { name: "TS 11", path: ROUTE_PAGES.TS11_PATH },
        { name: "TS 12", path: ROUTE_PAGES.TS12_PATH },
        { name: "TS 13", path: ROUTE_PAGES.TS13_PATH },
        { name: "TS 14", path: ROUTE_PAGES.TS14_PATH },
        { name: "TS 15", path: ROUTE_PAGES.TS15_PATH },
        { name: "TS 16", path: ROUTE_PAGES.TS16_PATH },
        { name: "TS 17", path: ROUTE_PAGES.TS17_PATH },
        { name: "TS 18", path: ROUTE_PAGES.TS18_PATH },
        { name: "TS 19", path: ROUTE_PAGES.TS19_PATH },
        { name: "TS 20", path: ROUTE_PAGES.TS20_PATH },
        { name: "TS 21", path: ROUTE_PAGES.TS21_PATH },
        { name: "TS 22", path: ROUTE_PAGES.TS22_PATH },
        { name: "TS 23", path: ROUTE_PAGES.TS23_PATH },
        { name: "TS 24", path: ROUTE_PAGES.TS24_PATH },
        { name: "TS 25", path: ROUTE_PAGES.TS25_PATH },
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

export default TSWrapIndex