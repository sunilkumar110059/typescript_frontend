import { CountEnum, } from './EnumType'


type CountState = {
    count: number;
}

type CountAction = {
    type: CountEnum.INC | CountEnum.DEC | CountEnum.RESET
    payload: number;
}

function counterReducer(state: CountState, action: CountAction) {
    const { type, payload } = action;
    switch (type) {
        case CountEnum.INC:
            return {
                ...state,
                count: state.count + payload,
            };

        case CountEnum.DEC:
            return {
                ...state,
                count: state.count <= 0 ? state.count : state.count - payload,
            };
        case CountEnum.RESET:
            return {
                ...state,
                count: payload,
            };

        default: return state;
    }
}

export { counterReducer }