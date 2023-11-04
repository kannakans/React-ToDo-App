import styles from './ToDoItem.module.css';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useState } from 'react'
import { removeToDo } from '../slices/todoSlice'
import  ToDoModal  from './ToDoModal'
import { getClasses } from '../utils/utils'

function ToDoItem(props) {
  const dispatch = useDispatch()
  const [updateModalOpen, setUpdateModalOpen ] = useState(false);
  const {
    id,
    title,
    status,
    time,
    date
  } = props.item
  const handleOnClick = () => {
    dispatch(removeToDo({
      id,
    }))
  }
  const handleEdit = () => {
    setUpdateModalOpen(true)
  }
  return (
  <div className={styles.content_container}>
    <div className={getClasses([
      styles.task_metadata_container,
    ]
      )
    }>
      <p className={status === 'complete' ? styles.completed : ''}>{title}</p>
      <p>{`${date}, ${time}`}</p>
    </div>
    <div className={styles.icon_container}>
      <div
      className={styles.icon}
      onClick={() => handleOnClick()}
      onKeyDown={() => handleOnClick()}
      // tabIndex={0}
      role="button"
      >
        <MdDelete />
      </div>
      <div
      className={styles.icon}
      onClick={() => handleEdit()}
      role="button"
      >
        <MdEdit />
      </div>
    </div>
    <ToDoModal
      type='update'
      modalOpen={updateModalOpen}
      setModalOpen={setUpdateModalOpen}
      status={props.status}
      todo={{title, status, id, time, date}}
    />
  </div>
  )
}

export default ToDoItem;