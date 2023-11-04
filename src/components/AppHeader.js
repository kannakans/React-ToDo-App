import styles from './AppHeader.module.css';
import { Button, SelectButton } from './Button'
import { useSelector, useDispatch } from 'react-redux'
import { updateFilterStatus } from '../slices/todoSlice';
import { useState } from 'react';
import ToDoModal from './ToDoModal';

function AppHeader({children, ...props}) {
  const initialFilterStatus = useSelector((state) => state.todo.filter);
  const dispatch = useDispatch();
  const [filterStatus, setFilterStatus] = useState(initialFilterStatus);
  const [modalOpen, setModalOpen] = useState(false)
  const onFilterStatusChange = (e) => {
    setFilterStatus(e.target.value)
    dispatch(updateFilterStatus(e.target.value))
  }
  return (
    <div className={styles.app_header_container}>
    <Button onClick={() => {setModalOpen(true)}}>Add Task</Button>
    <SelectButton
      id="status"
      onChange={(e)=>onFilterStatusChange(e)}
      value={filterStatus}
    >
      <option value="all">All</option>
      <option value="incomplete">Incomplete</option>
      <option value="complete">Complete</option>
    </SelectButton>
    {modalOpen && <ToDoModal
    type = "add"
    modalOpen={modalOpen}
    setModalOpen={setModalOpen}
    />}
    </div>
  )
}

export default AppHeader