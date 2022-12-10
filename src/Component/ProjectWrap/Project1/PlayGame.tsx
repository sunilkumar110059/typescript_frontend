import React, { useState } from 'react'
import { BsFillDice1Fill, BsFillDice2Fill, BsFillDice3Fill, BsFillDice4Fill, BsFillDice5Fill, BsFillDice6Fill } from 'react-icons/bs'
import { Button } from '../../../Shared/SharedComponentPath'

function PlayGame() {

    const dicenum = [1, 2, 3, 4, 5, 6]


    const [SelectedNum, SetSelectedNumFn] = useState<number>(0)
    const [Score, SetScoreFn] = useState<number>(0)
    const [RandomNum, SetRandomFn] = useState<number>(0)

    const [diceIcon, SetdiceIconFn] = useState<any>(<BsFillDice1Fill className='color3_1' style={{ fontSize: "10rem" }} />)

    console.log(SelectedNum)
    const numHandler = (val: number) => {
        SetSelectedNumFn(val)
    }

    const randomNumHandle = () => {

        const random = Math.ceil(Math.random() * 6)
        SetRandomFn(random)
        SetSelectedNumFn(0)

        if (SelectedNum > 0) {
            if (SelectedNum === RandomNum) {
                SetScoreFn(Score + RandomNum)
            }
            else {
                SetScoreFn(Score - RandomNum)
            }
            if (RandomNum === 1) { SetdiceIconFn(<BsFillDice1Fill className='color3_1' style={{ fontSize: "10rem" }} />) }
            else if (RandomNum === 2) { SetdiceIconFn(<BsFillDice2Fill className='color3_1' style={{ fontSize: "10rem" }} />) }
            else if (RandomNum === 3) { SetdiceIconFn(<BsFillDice3Fill className='color3_1' style={{ fontSize: "10rem" }} />) }
            else if (RandomNum === 4) { SetdiceIconFn(<BsFillDice4Fill className='color3_1' style={{ fontSize: "10rem" }} />) }
            else if (RandomNum === 5) { SetdiceIconFn(<BsFillDice5Fill className='color3_1' style={{ fontSize: "10rem" }} />) }
            else if (RandomNum === 6) { SetdiceIconFn(<BsFillDice6Fill className='color3_1' style={{ fontSize: "10rem" }} />) }
        }
    }




    return (
        <div className='wrapper'>
            <h1>Select Number</h1>
            <div className='row justify-content-center'>
                {dicenum.map((val, index) => {
                    return (
                        <div className="col-auto" key={index}>
                            <div
                                className={`color1 fs-3 cursor-pointer px-4 py-1 ${SelectedNum === val ? 'bg3_1 ' : 'bg2_1'}`}
                                onClick={() => numHandler(val)}> {val}</div>
                        </div>
                    )
                })}

            </div>

            <div className='row justify-content-center mt-5'>
                <div className='col-auto cursor-pointer' onClick={randomNumHandle}>
                    {diceIcon}
                </div>
            </div>

            <div className='row justify-content-center mt-5'>
                <div className='col-12 fs-1 fw-bold text-center'> Total Score</div>
                <div className='col-12 fs-1 fw-bold text-center'>{Score}</div>
                <div className='col-12 text-center'>
                    <Button styleClass={`btn_primary`}>  Reset Score </Button>
                </div>

            </div>

        </div>
    )
}

export default PlayGame


