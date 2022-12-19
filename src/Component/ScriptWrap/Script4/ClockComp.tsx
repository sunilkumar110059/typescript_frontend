import { TiPlus, TiMinus } from 'react-icons/ti';
import { Button } from "../../../Shared/SharedComponentPath";



type ClockCompProps = {
    timeHandler: (elem: string) => void
    TIME: number
    MINUS_ARG: string
    PLUS_ARG: string
    TIME_HEADING: string

}

function ClockComp(props: ClockCompProps) {
    const { timeHandler, TIME, MINUS_ARG, PLUS_ARG, TIME_HEADING } = props


    return (
        <div className="col-auto text-center fs-3">
            <div className="ovr">{TIME_HEADING}</div>
            <h1 className="display-2">{TIME}</h1>
            <div className="row g-2">
                <div className="col">
                    <Button styleClass="d-flex align-items-center bg3_1 cursor-pointer" onClick={() => { timeHandler(MINUS_ARG) }}>
                        <TiMinus className='fs-6 color1' /></Button>
                </div>
                <div className="col">
                    <Button styleClass="d-flex align-items-center bg4_1 cursor-pointer" onClick={() => { timeHandler(PLUS_ARG) }}>
                        <TiPlus className='fs-6 color1' /></Button>
                </div>
            </div>
        </div>
    );
}

export default ClockComp