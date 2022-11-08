import React from 'react';
import {completeTask, deleteTaskById, flagTask} from "../../store/thunk/taskThunk";
import {useDispatch} from "react-redux";
import styles from './TaskDropDown.module.css'

const TaskDropDown = ({props}) => {
   const options = {
	  weekday: 'short',
	  year: 'numeric',
	  month: 'short',
	  day: 'numeric',
   };

   const dispatch = useDispatch()
   return (
	  <div className={styles.task_dropdown}>
		 {<div className={styles.date}>{`${new Date(props.date).toLocaleString({}, options).slice()}`}</div>}
		 <button onClick={() => dispatch(flagTask(props))}>Flag</button>
		 <button onClick={() => dispatch(completeTask(props))}>Complete</button>
		 <button className={styles.delete_btn} onClick={() => dispatch(deleteTaskById(props))}>Delete</button>
	  </div>
   );
};

export default TaskDropDown;
