import { useEffect, useState } from "react";
import styles from './ToDoModal.module.css'
import { Button } from './Button.js'
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from "../slices/todoSlice";
import { MdOutlineClose } from 'react-icons/md'
import React from 'react'

function ToDoModal(props) {
  const [title, setTitle] = useState('')
  const [status, setStatus] = useState('incomplete')
  const dispatch = useDispatch();
  const {
    type,
    todo,
    modalOpen,
    setModalOpen,
  } = props

  function extractTimeFromDateTime(datetimeString) {
    const dateTime = new Date(datetimeString);
    const hours = dateTime.getHours().toString().padStart(2, '0');
    const minutes = dateTime.getMinutes().toString().padStart(2, '0');
    const time = `${hours}:${minutes}`;

    return time;
  }
  function formatDateToMMDDYYYY(date) {
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear().toString();

    return `${month}/${day}/${year}`;
  }
  useEffect(() => {
    if (type === 'add') {
      setTitle('')
    } else {
      setTitle(todo.title)
      setStatus(todo.status)
    }
  }, [type, todo])
  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === 'add') {
      dispatch(addTodo({
        id: uuid(),
        title,
        status,
        time: extractTimeFromDateTime(new Date()),
        date: formatDateToMMDDYYYY(new Date())
      }))
    } else {
      console.log({ ...todo, title, status}, '+++++++')
      dispatch(updateTodo({ ...todo, title, status}))
    }
    setModalOpen(false)
  }

  const handleCancel = () => {
    setModalOpen(false)
  }

  return (
    <React.Fragment>
    {modalOpen && (<div className={styles.modal_wrapper}>
      <div className={styles.container}>
        <div
          className={styles.close_button}
          role="button"
          onClick={(e) => setModalOpen(false)}
          onKeyDown={(e) => setModalOpen(false)}
        >
          <MdOutlineClose />
        </div>
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
          <h1>{type === 'add' ? 'ADD' : 'UPDATE'} TO DO</h1>
          <label htmlFor="title">
            Title
            <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label htmlFor="status">
            Status
            <select id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            >
              <option value="complete">Complete</option>
              <option value="incomplete">Incomplete</option>
            </select>
          </label>
            <div className={styles.form_button}>
              <Button type="submit">{type === "add" ? 'Add' : 'Update'} Task</Button>
              <Button
                type="button"
                onClick={(e)=> handleCancel()}
              >
                Cancel
              </Button>
            </div>
        </form>
      </div>
    </div>)}
    </React.Fragment>
  )
}

export default ToDoModal