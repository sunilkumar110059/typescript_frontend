import React, { Fragment } from 'react';
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";


function RatingIndex1() {
    return (
        <Fragment>
            <div className="cover bg2_5 px-3 border1 bordercolor2_4 mb-4">
                <div className="row">
                    <div className="col py-1"> <h1>Rating 1  <AiOutlineStar/> <AiFillStar/> <BsStarHalf/></h1> </div>
                    <div className="col-auto py-1 border_left1 bordercolor2_4 d-flex align-items-center"> Rating 1 </div>
                </div>
            </div>
            <div className='cover'> Rating page </div>
        </Fragment>
    )
}

export default RatingIndex1