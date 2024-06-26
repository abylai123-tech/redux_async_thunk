import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleStatus, deleteTodo,} from '../store/todoSlice';

export const TodoItem = ({id, title, completed }) => {    
  const dispatch = useDispatch();

  return (
    <li>
          <input 
                type='checkbox'
                checked={completed}
                onChange={() => dispatch(toggleStatus(id))}
              />
              <span>{title}</span>   
              <span className="delete" onClick={() => dispatch(deleteTodo(id))}>
                &times;
              </span>
    </li>
  )
}
