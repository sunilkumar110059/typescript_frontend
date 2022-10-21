
type CountAction = {
    type: string;
    payload: number;
}

type CountState = {
    count: number;
}

function counterReducer(state: CountState, action: CountAction) {
    const { type, payload } = action;
    switch (type) {
        case "INCREMENT":
            return {
                ...state,
                count: state.count + payload,
            };

        case "DECREMENT":
            return {
                ...state,
                count: state.count <= 0 ? state.count : state.count - payload,
            };
        default: return state;
    }
}

export { counterReducer }