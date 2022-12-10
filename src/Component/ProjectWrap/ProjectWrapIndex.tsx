import React, { Fragment } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import { ROUTE_PAGES } from '../../Constant/RoutePath/RoutePathIndex';

function ProjectWrapIndex() {
    const List = [
        { name: "Project 1", path: ROUTE_PAGES.PROJECT1_PATH },
        { name: "Project 2", path: ROUTE_PAGES.PROJECT2_PATH },
        { name: "Project 3", path: ROUTE_PAGES.PROJECT3_PATH },
        { name: "Project 4", path: ROUTE_PAGES.PROJECT4_PATH },
        { name: "Project 5", path: ROUTE_PAGES.PROJECT5_PATH },
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

export default ProjectWrapIndex