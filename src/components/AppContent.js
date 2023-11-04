import styles from './AppHeader.module.css';
import { useSelector, useDispatch } from 'react-redux';
import ToDoItem from './ToDoItem.js';



function AppContent() {
  let toDoList = useSelector((state) => state.todo.todoList)
  const status = useSelector((state) => state.todo.filter)
  if (status !== 'all') {
     toDoList = toDoList.filter((item) => item.status === status)
  }

  const jsx = toDoList && toDoList.length > 0 ? (
        <>{toDoList.map((eachItem) => <ToDoItem key={eachItem.id} item={eachItem}/>)}</>
    ) : (
      <div className={styles.empty_text}>
        No Todos
    </div>
    )

    return (
    <div className={styles.app__wrapper}>
      {jsx}
    </div>
  );
}

export default AppContent