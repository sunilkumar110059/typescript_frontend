import React, { Fragment } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import { ROUTE_PAGES } from '../../Constant/RoutePath/RoutePathIndex';

function TodoWrapIndex() {
    const List = [
        { name: "Todo 1", path: ROUTE_PAGES.TODO1_PATH },
        { name: "Todo 2", path: ROUTE_PAGES.TODO2_PATH },
        { name: "Todo 3", path: ROUTE_PAGES.TODO3_PATH },
        { name: "Todo 4", path: ROUTE_PAGES.TODO4_PATH },
        { name: "Todo 5", path: ROUTE_PAGES.TODO5_PATH },
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

export default TodoWrapIndex