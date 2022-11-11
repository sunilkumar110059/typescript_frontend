import React, { Fragment } from "react";
import { Routes, Route } from 'react-router-dom';
import { ROUTE_NAV, ROUTE_PAGES } from './Constant/RoutePath/RoutePathIndex';

import HeaderIndex from "./Constant/Header/HeaderIndex";
import FooterIndex from "./Constant/Footer/FooterIndex";

import HomeIndex from "./Component/Home/HomeIndex";
import PageNotFoundIndex from "./Component/PageNotFound/PageNotFoundIndex";


import { CrudWrapIndex, CrudIndex1, CrudIndex2, CrudIndex3, CrudIndex4, CrudIndex5 } from './Component/CrudWrap/CrudWrapModule';
import { TabWrapIndex, TabIndex1, TabIndex2, TabIndex3, TabIndex4, TabIndex5 } from './Component/TabWrap/TabWrapModule';
import { HOCWrapIndex, HOCIndex1, HOCIndex2, HOCIndex3, HOCIndex4, HOCIndex5 } from './Component/HOCWrap/HOCWrapModule';
import { TodoWrapIndex, TodoIndex1, TodoIndex2, TodoIndex3, TodoIndex4, TodoIndex5 } from './Component/TodoWrap/TodoWrapModule';
import { DSAWrapIndex, DSAIndex1, DSAIndex2, DSAIndex3, DSAIndex4, DSAIndex5 } from './Component/DSAlgo/DSAWrapModule';


import { OOPWrapIndex, OOPIndex1, OOPIndex2, OOPIndex3, OOPIndex4, OOPIndex5 } from './Component/OOpWrap/OOPWrapModule';

import { RatingWrapIndex, RatingIndex1, RatingIndex2, RatingIndex3, RatingIndex4, RatingIndex5 } from './Component/RatingWrap/RatingModule'

import {
  TSWrapIndex, TS1, TS2, TS3, TS4, TS5, TS6, TS7, TS8, TS9, TS10, TS11, TS12, TS13,
  TS14, TS15, TS16, TS17, TS18, TS19, TS20, TS21, TS22, TS23, TS24, TS25, TS26, TS27
} from './Component/TypeScriptWrap/TSModule';

function App() {
  return (
    <Fragment>
      <HeaderIndex />
      <div className="bodypart">
        <Routes>
          <Route path={ROUTE_NAV.HOME_PATH} element={<HomeIndex />} />

          <Route path={ROUTE_NAV.CRUD_PATH} element={<CrudWrapIndex />} >
            <Route index element={<CrudIndex1 />} />
            <Route path={ROUTE_PAGES.CRUD1_PATH} element={<CrudIndex1 />} />
            <Route path={ROUTE_PAGES.CRUD2_PATH} element={<CrudIndex2 />} />
            <Route path={ROUTE_PAGES.CRUD3_PATH} element={<CrudIndex3 />} />
            <Route path={ROUTE_PAGES.CRUD4_PATH} element={<CrudIndex4 />} />
            <Route path={ROUTE_PAGES.CRUD5_PATH} element={<CrudIndex5 />} />
          </Route>
          
          <Route path={ROUTE_NAV.TAB_PATH} element={<TabWrapIndex />}>
            <Route index element={<TabIndex1 />} />
            <Route path={ROUTE_PAGES.TAB1_PATH} element={<TabIndex1 />} />
            <Route path={ROUTE_PAGES.TAB2_PATH} element={<TabIndex2 />} />
            <Route path={ROUTE_PAGES.TAB3_PATH} element={<TabIndex3 />} />
            <Route path={ROUTE_PAGES.TAB4_PATH} element={<TabIndex4 />} />
            <Route path={ROUTE_PAGES.TAB5_PATH} element={<TabIndex5 />} />
          </Route>

          <Route path={ROUTE_NAV.HOC_PATH} element={<HOCWrapIndex />} >
            <Route index element={<HOCIndex1 />} />
            <Route path={ROUTE_PAGES.HOC1_PATH} element={<HOCIndex1 />} />
            <Route path={ROUTE_PAGES.HOC2_PATH} element={<HOCIndex2 />} />
            <Route path={ROUTE_PAGES.HOC3_PATH} element={<HOCIndex3 />} />
            <Route path={ROUTE_PAGES.HOC4_PATH} element={<HOCIndex4 />} />
            <Route path={ROUTE_PAGES.HOC5_PATH} element={<HOCIndex5 />} />
          </Route>

          <Route path={ROUTE_NAV.TODO_PATH} element={<TodoWrapIndex />} >
            <Route index element={<TodoIndex1 />} />
            <Route path={ROUTE_PAGES.TODO1_PATH} element={<TodoIndex1 />} />
            <Route path={ROUTE_PAGES.TODO2_PATH} element={<TodoIndex2 />} />
            <Route path={ROUTE_PAGES.TODO3_PATH} element={<TodoIndex3 />} />
            <Route path={ROUTE_PAGES.TODO4_PATH} element={<TodoIndex4 />} />
            <Route path={ROUTE_PAGES.TODO5_PATH} element={<TodoIndex5 />} />
          </Route>

          <Route path={ROUTE_NAV.DSA_PATH} element={<DSAWrapIndex />} >
            <Route index element={<DSAIndex1 />} />
            <Route path={ROUTE_PAGES.DSA1_PATH} element={<DSAIndex1 />} />
            <Route path={ROUTE_PAGES.DSA2_PATH} element={<DSAIndex2 />} />
            <Route path={ROUTE_PAGES.DSA3_PATH} element={<DSAIndex3 />} />
            <Route path={ROUTE_PAGES.DSA4_PATH} element={<DSAIndex4 />} />
            <Route path={ROUTE_PAGES.DSA5_PATH} element={<DSAIndex5 />} />
          </Route>

          <Route path={ROUTE_NAV.OOP_PATH} element={<OOPWrapIndex />} >
            <Route index element={<OOPIndex1 />} />
            <Route path={ROUTE_PAGES.OOP1_PATH} element={<OOPIndex1 />} />
            <Route path={ROUTE_PAGES.OOP2_PATH} element={<OOPIndex2 />} />
            <Route path={ROUTE_PAGES.OOP3_PATH} element={<OOPIndex3 />} />
            <Route path={ROUTE_PAGES.OOP4_PATH} element={<OOPIndex4 />} />
            <Route path={ROUTE_PAGES.OOP5_PATH} element={<OOPIndex5 />} />
          </Route>

          
          <Route path={ROUTE_NAV.RATING_PATH} element={<RatingWrapIndex />} >
            <Route index element={<RatingIndex1 />} />
            <Route path={ROUTE_PAGES.RATING1_PATH} element={<RatingIndex1 />} />
            <Route path={ROUTE_PAGES.RATING2_PATH} element={<RatingIndex2 />} />
            <Route path={ROUTE_PAGES.RATING3_PATH} element={<RatingIndex3 />} />
            <Route path={ROUTE_PAGES.RATING4_PATH} element={<RatingIndex4 />} />
            <Route path={ROUTE_PAGES.RATING5_PATH} element={<RatingIndex5 />} />
          </Route>

        
          <Route path={ROUTE_NAV.TS_PATH} element={<TSWrapIndex />} >
            <Route index element={<TS1 />} />
            <Route path={ROUTE_PAGES.TS1_PATH} element={<TS1 />} />
            <Route path={ROUTE_PAGES.TS2_PATH} element={<TS2 />} />
            <Route path={ROUTE_PAGES.TS3_PATH} element={<TS3 />} />
            <Route path={ROUTE_PAGES.TS4_PATH} element={<TS4 />} />
            <Route path={ROUTE_PAGES.TS5_PATH} element={<TS5 />} />
            <Route path={ROUTE_PAGES.TS6_PATH} element={<TS6 />} />
            <Route path={ROUTE_PAGES.TS7_PATH} element={<TS7 />} />
            <Route path={ROUTE_PAGES.TS8_PATH} element={<TS8 />} />
            <Route path={ROUTE_PAGES.TS9_PATH} element={<TS9 />} />
            <Route path={ROUTE_PAGES.TS10_PATH} element={<TS10 />} />
            <Route path={ROUTE_PAGES.TS11_PATH} element={<TS11 />} />
            <Route path={ROUTE_PAGES.TS12_PATH} element={<TS12 />} />
            <Route path={ROUTE_PAGES.TS13_PATH} element={<TS13 />} />
            <Route path={ROUTE_PAGES.TS14_PATH} element={<TS14 />} />
            <Route path={ROUTE_PAGES.TS15_PATH} element={<TS15 />} />
            <Route path={ROUTE_PAGES.TS16_PATH} element={<TS16 />} />
            <Route path={ROUTE_PAGES.TS17_PATH} element={<TS17 />} />
            <Route path={ROUTE_PAGES.TS18_PATH} element={<TS18 />} />
            <Route path={ROUTE_PAGES.TS19_PATH} element={<TS19 />} />
            <Route path={ROUTE_PAGES.TS20_PATH} element={<TS20 />} />
            <Route path={ROUTE_PAGES.TS21_PATH} element={<TS21 />} />
            <Route path={ROUTE_PAGES.TS22_PATH} element={<TS22 />} />
            <Route path={ROUTE_PAGES.TS23_PATH} element={<TS23 />} />
            <Route path={ROUTE_PAGES.TS24_PATH} element={<TS24 />} />
            <Route path={ROUTE_PAGES.TS25_PATH} element={<TS25 />} />
            <Route path={ROUTE_PAGES.TS26_PATH} element={<TS26 />} />
            <Route path={ROUTE_PAGES.TS27_PATH} element={<TS27 />} />
          </Route>

          <Route path={'*'} element={<PageNotFoundIndex />} />
        </Routes>
      </div>
      <FooterIndex />
    </Fragment>
  );
}

export default App;
