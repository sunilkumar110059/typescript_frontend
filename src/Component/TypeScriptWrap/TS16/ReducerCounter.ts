import { CountState, CountAction, CountEnum, } from './ReducerType'

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