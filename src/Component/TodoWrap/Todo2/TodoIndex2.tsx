import React from 'react';
import { TodoContextProvider } from '../../../ContextApi/TodoContext/TodoContext';

import TodoCombine from './TodoCombine';

function TodoIndex3() {
    return (
        <TodoContextProvider>
            <TodoCombine />
        </TodoContextProvider>
    )
}

export default TodoIndex3