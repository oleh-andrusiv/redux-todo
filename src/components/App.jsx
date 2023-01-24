import { useSelector, useDispatch } from 'react-redux'

import { addToDo, receiveNewText, doneToDo, deleteToDo } from '../features/todoSlice'

import './App.css'
import SingleToDo from './SingleToDo/SingleToDo'

const App = () => {

  const list = useSelector((state) => {
    return state.manageToDo.list;
  })

  const input = useSelector((state) => {
    return state.manageToDo.value;
  })

  const dispatch = useDispatch();

  const control = (event) => {
    event.preventDefault();
    
    const clickedAction = event.target.getAttribute('btntype');
    const clickedElem = event.target.getAttribute('id');
    
    
    if (clickedAction === 'done-btn') {
        dispatch(doneToDo(clickedElem))
    }
    
    if (clickedAction === 'close-btn') {
        dispatch(deleteToDo(clickedElem))
    }

    if (clickedAction === 'add-btn') {
      dispatch(addToDo())
    }
  };

  return (
    <div className="todo-list" onClick={control}>
      <h1 className='todo-list_header header'>To do list</h1>
      <div className='todo-list_action'>
        <input className='todo-list_input' type="text" placeholder="Write a new todo" onChange={(event) => {dispatch(receiveNewText(event.target.value))}} value={input}></input>
        <button className='todo-list_submit' btntype='add-btn'> Add </button>
      </div>
      <ul>
        {list.map((el) => {
          return (<SingleToDo element={el} key={el.text + list.indexOf(el)} id={list.indexOf(el)}/>)})}
      </ul>
    </div>
  )
}

export default App