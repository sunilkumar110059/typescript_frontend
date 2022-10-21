import React, { Fragment } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import { ROUTE_PAGES } from '../../Constant/RoutePath/RoutePathIndex';

function CrudWrapIndex() {
    const List = [
        { name: "Crud 1", path: ROUTE_PAGES.CRUD1_PATH },
        { name: "Crud 2", path: ROUTE_PAGES.CRUD2_PATH },
        { name: "Crud 3", path: ROUTE_PAGES.CRUD3_PATH },
        { name: "Crud 4", path: ROUTE_PAGES.CRUD4_PATH },
        { name: "Crud 5", path: ROUTE_PAGES.CRUD5_PATH },
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

export default CrudWrapIndex