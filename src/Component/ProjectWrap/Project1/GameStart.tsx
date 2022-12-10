import React from 'react';
import { IoDiceSharp } from "react-icons/io5";
import { Button } from '../../../Shared/SharedComponentPath';

type GameStartProps = {
    gameStartHandle: () => void
}

function GameStart(props: GameStartProps) {
    const { gameStartHandle} = props


    return (
        <div className='wrapper'>
            <div className="row">
                <div className='col'>
                    <IoDiceSharp className='color3_1' style={{ fontSize: "30rem" }} />
                </div>
                <div className='col'>
                    <h1>The Dice Game </h1>
                    <div className="ovr mt-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                        it to make a type specimen book. It has
                    </div>
                    <Button styleClass={`btn_secondary fs-4 px-5 mt-5`}
                        onClick={gameStartHandle}
                    >  Start </Button>
                </div>
            </div>

        </div>
    )
}

export default GameStart