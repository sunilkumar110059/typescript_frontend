import React, { Fragment } from 'react';
import Greet1 from './Greet1';


function TS1() {

    return (
        <Fragment>
            <div className="cover bg2_5 px-3 border1 bordercolor2_4 mb-4">
                <div className="row">
                    <div className="col-auto py-1"> <h1>TS 1 </h1> </div>
                    <div className="col py-1 d-flex align-items-center">  <h2 className='color3_1'> Cors Pass By Props</h2> </div>
                    <div className="col-auto py-1 border_left1 bordercolor2_4 d-flex align-items-center"> TS 1</div>
                </div>
            </div>

            <div className='container'>
                <div className='cover'>

                    <div className='row'>
                        <Greet1
                            name={"Sunil"}
                            age={30}
                            education={'B.A Pass'}
                            isLoggin={false}
                        />
                        <Greet1
                            name={"Anil Kumar"}
                            age={27}
                            education={'B.C.A Pass'}
                            isLoggin={true}
                        />

                        <Greet1
                            name={"Sapana"}
                            age={28}
                            education={'B.COM Pass'}
                            isLoggin={true}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default TS1