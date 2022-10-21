import React, { Fragment } from 'react'
import Greet8 from './Greet8'

function TS8() {


    return (
        <Fragment>
            <div className="cover bg2_5 px-3 border1 bordercolor2_4 mb-4">
                <div className="row">
                    <div className="col-auto py-1"> <h1>TS 8</h1></div>
                    <div className="col py-1 d-flex align-items-center">  <h2 className='color3_1'>Style CSS Pass By Props</h2> </div>
                    <div className="col-auto py-1 border_left1 bordercolor2_4 d-flex align-items-center"> TS 8</div>
                </div>
            </div>

            <div className='container'>
                <Greet8
                    styles1={{ margin: "10px", backgroundColor: "red", padding: "20px", fontSize: "30px", fontWeight: "bolder", color: "#fff" }}
                    styles2={{ margin: "10px", backgroundColor: "green", padding: "20px", fontSize: "30px", fontWeight: "bolder", color: "#fff" }}
                    flexboxStyle={{
                        display: "flex", justifyContent: "center", alignItems: "center",
                        padding: "20px", marginTop: "30px", border: "solid 5px red",
                        backgroundColor: "#000", height: "200px"
                    }}

                />

            </div>
        </Fragment>
    )
}

export default TS8