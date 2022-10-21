import React, { Fragment, useState } from 'react';
import TodoList from './TodoList';
import Todoinput from './Todoinput';
import { InterFaceTodo } from './InterfaceTodo1';

function TodoIndex1() {

    const [TodoItems, SetTodoListFn] = useState<InterFaceTodo[]>([])

    const getUserFun = (obj: InterFaceTodo): void => {
        SetTodoListFn([...TodoItems, obj])
    }

    const deleteHandleFun = (id: string) => {
        const removeList = TodoItems.filter((items) => items.id !== id)
        SetTodoListFn(removeList)
    }

    return (
        <Fragment>
            <div className="cover bg2_5 px-3 border1 bordercolor2_4 mb-4">
                <div className="row">
                    <div className="col py-1"> <h1>Todo 1 </h1> </div>
                    <div className="col-auto py-1 border_left1 bordercolor2_4 d-flex align-items-center"> Todo 1 </div>
                </div>
            </div>
            <div className='container'>
                <Todoinput
                    getUserFun={getUserFun}
                />

                <div className='cover mt-5'>
                    <div className="row">
                        {TodoItems.map((todoUser, index) => {
                            return (
                                <TodoList
                                    key={index}
                                    todoUser={todoUser}
                                    indexNo={index}
                                    deleteHandleFun={deleteHandleFun}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default TodoIndex1