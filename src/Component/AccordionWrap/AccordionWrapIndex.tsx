import React, { Fragment } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import { ROUTE_PAGES } from '../../Constant/RoutePath/RoutePathIndex';

function AccordionWrapIndex() {
    const List = [
        { name: "Accordion 1", path: ROUTE_PAGES.ACCORDION1_PATH },
        { name: "Accordion 2", path: ROUTE_PAGES.ACCORDION2_PATH },
        { name: "Accordion 3", path: ROUTE_PAGES.ACCORDION3_PATH },
        { name: "Accordion 4", path: ROUTE_PAGES.ACCORDION4_PATH },
        { name: "Accordion 5", path: ROUTE_PAGES.ACCORDION5_PATH },
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

export default AccordionWrapIndex