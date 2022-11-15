import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import { ROUTE_NAV } from '../RoutePath/RoutePathIndex';
function NavBar() {
    return (
        <div className='cover h-100'>
            <div className="row g-0 bg3_1 color1 navbar">
                <div className="col-auto"> <Link className="d-flex align-items-center h-100 py-1 px-2 fs-2 fw-bolder" to={ROUTE_NAV.HOME_PATH}>LOGO</Link> </div>
                <div className="col-auto"><NavLink end to={ROUTE_NAV.HOME_PATH} className="d-flex align-items-center h-100 py-1 px-3" >Home</NavLink></div>                
                <div className="col-auto"><NavLink to={ROUTE_NAV.TAB_PATH} className="d-flex align-items-center h-100 py-1 px-3">Tab</NavLink></div>
                <div className="col-auto"><NavLink to={ROUTE_NAV.ACCORDION_PATH} className="d-flex align-items-center h-100 py-1 px-3">Accordion</NavLink></div>
                <div className="col-auto"><NavLink to={ROUTE_NAV.HOC_PATH} className="d-flex align-items-center h-100 py-1 px-3">HOC</NavLink></div>
                <div className="col-auto"><NavLink to={ROUTE_NAV.OOP_PATH} className="d-flex align-items-center h-100 py-1 px-3">OOP</NavLink></div>
                
                <div className="col-auto"><NavLink to={ROUTE_NAV.RATING_PATH} className="d-flex align-items-center h-100 py-1 px-3">Rating</NavLink></div>
                <div className="col-auto"><NavLink to={ROUTE_NAV.CRUD_PATH} className="d-flex align-items-center h-100 py-1 px-3" >Crud</NavLink></div>
                <div className="col-auto"><NavLink to={ROUTE_NAV.TODO_PATH} className="d-flex align-items-center h-100 py-1 px-3">Todo</NavLink></div>
                <div className="col-auto"><NavLink to={ROUTE_NAV.DSA_PATH} className="d-flex align-items-center h-100 py-1 px-3">DS Algorithm</NavLink></div>
                <div className="col-auto"><NavLink to={ROUTE_NAV.SCRIPT_PATH} className="d-flex align-items-center h-100 py-1 px-3">JS Script</NavLink></div>
                <div className="col-auto"><NavLink to={ROUTE_NAV.TS_PATH} className="d-flex align-items-center h-100 py-1 px-3">Type Script</NavLink></div>
            </div>
        </div>
    )
}

export default NavBar