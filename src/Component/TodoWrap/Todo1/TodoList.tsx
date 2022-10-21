import React from 'react';
import { InterFaceTodo } from './InterfaceTodo1';

interface TodoListProps {
    todoUser: InterFaceTodo;
    indexNo: number,
    //   deleteHandleFun: (id: string) => void

    deleteHandleFun: (id:string) => void

}

function TodoList(props: TodoListProps) {
    const { todoUser, indexNo, deleteHandleFun } = props
    const { id, fistname, email, age } = todoUser



    return (

        <div className="col-3 mb-4">
            <div className="cover border1 bordercolor2_4 p-2">
                <div className="ovr display-6 fw-bold"> {fistname}</div>
                <div className="ovr"> {email}</div>
                <div className="ovr"> {age}</div>
                <div className="row mt-4">
                    <div className="col">
                        <div className="bg2_1 color1 py-1 px-3 d-inline-block cursor-pointer">{indexNo + 1}</div>
                    </div>
                    <div className="col-auto">
                        <div className="bg5_1 color1 py-1 px-3 cursor-pointer">Edit</div>
                    </div>
                    <div className="col-auto">
                        <div className="bg3_1 color1 py-1 px-3 cursor-pointer" onClick={() => deleteHandleFun(id)}>Delete</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TodoList