import React, { Fragment } from 'react'
import ListArray from './ListArray';
import ListArrayObject from './ListArrayObject';

function TS22() {
    return (
        <Fragment>
            <div className="cover bg2_5 px-3 border1 bordercolor2_4 mb-4">
                <div className="row">
                    <div className="col-auto py-1"> <h1>TS 22</h1></div>
                    <div className="col py-1 d-flex align-items-center">
                        <h2 className='color3_1'>Generic Props</h2>
                    </div>
                    <div className="col-auto py-1 border_left1 bordercolor2_4 d-flex align-items-center"> TS 22</div>
                </div>
            </div>

            <div className='container'>

                <div className="cover mb-4">
                    <ListArray
                        heading="String Array"
                        items={["Banana", "Apple", "Mango", "Graphes", "Pineapple"]}
                    />
                </div>

                <div className="cover mb-4">
                    <ListArray
                        heading="Number Array"
                        items={[18, 25, 39, 45, 31]}
                    />
                </div>

                <div className="cover mb-4">
                    <ListArray
                        heading="String and Number"
                        items={["Banana", "Apple", "Mango", "Graphes", "Pineapple", 18, 25, 39, 45, 31]}
                    />
                </div>

                <div className="cover mb-4">
                    <ListArrayObject
                        heading="Array Object List"
                        ArrObjItems={[
                            { id: 26, name: "Sunil Kumar" },
                            { id: 35, name: "Anil" },
                            { id: 63, name: "Sapan" },
                            { id: 56, name: "Vansh" },
                            { id: 96, name: "Ansh" },
                        ]}

                    />
                </div>



            </div>
        </Fragment>
    )
}

export default TS22