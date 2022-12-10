import React, { Fragment, useState } from 'react';
import GameStart from './GameStart';
import PlayGame from './PlayGame';
function ProjectIndex1() {


    const [GameState, SetGameFn] = useState<boolean>(true)

    const gameStartHandle = () => {
        SetGameFn(false)
    }

    return (
        <Fragment>
            <div className="cover bg2_5 px-3 border1 bordercolor2_4 mb-4">
                <div className="row">
                    <div className="col py-1"> <h1>Project 1 </h1> </div>
                    <div className="col-auto py-1 border_left1 bordercolor2_4 d-flex align-items-center"> Dice Game </div>
                </div>
            </div>
            <div className='container'>
                {GameState ? <GameStart gameStartHandle={gameStartHandle} /> : <PlayGame />}
            </div>
        </Fragment>
    )
}

export default ProjectIndex1