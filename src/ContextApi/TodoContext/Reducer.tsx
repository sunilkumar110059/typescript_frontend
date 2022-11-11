import { StateType, ActionType, TodoEnum } from './TodoDataType';

function TodoReducerFun(state: StateType, action: ActionType) {
    const { type, payload } = action;

    switch (type) {

        case TodoEnum.DELETE_POST:
            return {
                ...state,
                post: state.post.filter((user) => user.id !== payload)
            };

        case TodoEnum.EDIT_POST:
            return {
                ...state,
                isShow: true,
                isAddPost: false,
                singlePost: state.post.find((user) => user.id === payload)
            };

        case TodoEnum.UPDATE_POST:
            return {
                ...state,
                isShow: false,
                post: state.post.map((user) => user.id === payload.id ? payload : user)
            };

        case TodoEnum.Add_POST_FORM_SHOW:
            return {
                ...state,
                isShow: false,
                isAddPost: true,
            };

        case TodoEnum.ADD_POST:
            return {
                ...state,
                isAddPost: false,
                post: [...state.post, payload]
            };

        default: return state;
    }


}


export { TodoReducerFun }