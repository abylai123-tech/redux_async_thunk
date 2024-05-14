import './App.css'
import { useDispatch} from 'react-redux';
import { useState } from 'react';
import { addTodo } from './store/todoSlice';
import { TodoList } from './components/TodoList';
import { InputField } from './components/InputField';
  
function App() {    
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addTask = () =>  {
    dispatch(addTodo({text}))
    setText('');  
  };
  
  return (
    <div className='App'>
      <InputField text={text} handleInput={setText} handleSubmit={addTask}/>

      <TodoList />
    </div>
  )
}

export default App