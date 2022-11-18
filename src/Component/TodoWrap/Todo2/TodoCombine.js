import React, { Fragment } from 'react';
import { Button } from '../../../Shared/SharedComponentPath';
import EditUser from './EditUser';
import UserList from './UserList';
import PostUser from './PostUser';
import { useContextFun } from '../../../ContextApi/TodoContext/TodoContext';

const TodoCombine = () => {
  const { state, addPostShow } = useContextFun()
  const { isShow, isAddPost } = state;

  console.log(isAddPost)

  return (
    <Fragment>
      <div className="cover bg2_5 px-3 border1 bordercolor2_4 mb-4">
        <div className="row">
          <div className="col py-1"> <h1>Context API </h1> </div>
          <div className="col-auto py-1 border_left1 bordercolor2_4 d-flex align-items-center"> Todo 3 </div>
        </div>
      </div>

      <div className='wrapper px-4'>
        {isShow && <EditUser />}
        {isAddPost ? <PostUser /> : (
          <Button
            onClick={() => addPostShow()}
            styleClass={`btn_primary`}> Add Post
          </Button >
        )}

        <UserList />
      </div>
    </Fragment>
  )
}

export default TodoCombine