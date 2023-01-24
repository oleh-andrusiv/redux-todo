const SingleToDo = ({ element, id }) => {

    return (
        <li className='todo-list_item' id={id}>
            <span className={`todo-list_item_text ${element.isDone}`}>{element.text}</span>
            <div className='todo-list_item_control'>
                <button className='todo-list_item_btn done-btn' btntype='done-btn' id={id}>&#9989;</button>
                <button className='todo-list_item_btn close-btn' btntype='close-btn' id={id}>&#10060;</button>
            </div>
        </li>
    )
};

export default SingleToDo