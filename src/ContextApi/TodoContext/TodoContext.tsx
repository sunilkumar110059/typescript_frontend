
import { createContext, useContext, useReducer } from 'react';
import { TodoData } from '../../data/TodoData';
import { StateType, ActionType, PostType, TodoEnum } from './TodoDataType';
import { TodoReducerFun } from './Reducer';




const initialState = {
    post: TodoData,
    singlePost: {},
    isLoading: false,
    isErorr: false,
    isShow: false,
    isAddPost:false,
}


const TodoCont = createContext({} as ContextProvider)

// const TodoCont = createContext<ContextProvider>({ state: initialState, dispatch: () => { } })
// const TodoCont = createContext<ContextProvider>(initialState)
// const TodoCont = createContext<ContextProvider | null>(null)
// const TodoCont = createContext({} as ContextProvider)

type ContextProvider = {
    state: StateType;
    dispatch: React.Dispatch<ActionType>;
    deletePost: (id: number) => void;
    editPost: (id: number) => void;
    updatePost: (obj: PostType) => void;
    addPost: (obj: PostType) => void;
    addPostShow: () => void;
    
}

type TodoContextProps = {
    children: React.ReactNode;
}

function TodoContextProvider({ children }: TodoContextProps) {

    const [state, dispatch] = useReducer(TodoReducerFun, initialState)

    const deletePost = (id: number) => {
        dispatch({ type: TodoEnum.DELETE_POST, payload: id })
    }

    const editPost = (id: number) => {
        dispatch({ type: TodoEnum.EDIT_POST, payload: id })
    }

    const updatePost = (obj: PostType) => {
        dispatch({ type: TodoEnum.UPDATE_POST, payload: obj })
    }

    const addPost = (obj: PostType) => {
        console.log(obj)
        dispatch({ type: TodoEnum.ADD_POST, payload: obj })
    }

    const addPostShow = () => {
        dispatch({ type: TodoEnum.Add_POST_FORM_SHOW })
    }

    

    
    return (
        <TodoCont.Provider value={{ state, dispatch, deletePost, editPost, updatePost, addPost, addPostShow }}>
            {children}
        </TodoCont.Provider>
    )
}


// custom hook
const useContextFun = () => {
    return useContext(TodoCont)
}

export { TodoContextProvider, useContextFun }
