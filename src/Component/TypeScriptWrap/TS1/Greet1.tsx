import React from 'react'

type GreetProps = {
    name: string;
    age: number;
    education?: string;
    isLoggin: boolean;
}

function Greet1(props: GreetProps) {
    const { name, age, isLoggin, education } = props
    return (
        <div className="col-4">
            <div className="cover h-100 border1 bordercolor2_4 p-2 ">
                <div className='mb-2'>{isLoggin ? `${name} is Login` : `You are Not Login`} </div>
                <div className='cover'>
                    <h3 className='mb-3'> Welcome <span className='color3_1'> {isLoggin && name}</span> </h3>
                    {isLoggin ?
                        <div className="row">
                            <div className="col">
                                {education ?
                                    <>
                                        <div className='ovr'> Education</div>
                                        <h4 className='ovr color3_1'> {education} </h4>
                                    </> : <div> Education is <span className='color3_1'>Not Mention</span> </div>
                                }
                            </div>
                            <div className="col-auto text-end">
                                <div className='ovr'> Age</div>
                                <h4 className='ovr color3_1'> {age} </h4></div>
                        </div>
                        : "  Welcome Guest Please Login"

                    }
                </div>
            </div>
        </div>
    )
}

export default Greet1