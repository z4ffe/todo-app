import React, {useEffect, useReducer} from 'react';
import {useSelector} from "react-redux";
import styles from './Tiles.module.css'
import flagged from '../../images/svg/flagged.svg'
import alltasks from '../../images/svg/alltasks.svg'
import completed from '../../images/svg/completed.svg'

const Tiles = () => {
   const storeTasks = useSelector(state => state.task)
   let [status, setStatus] = useReducer((state, action) => {
	  switch (action.type) {
		 case('completed'):
			return {...state, completedTasks: action.payload}
		 case ('flagged'):
			return {...state, flagsTasks: action.payload}
	  }
   }, {completedTasks: 0, flagsTasks: 0},)

   const tasksStatus = async () => {
	  let completed = 0;
	  let flagged = 0
	  for (const task of storeTasks.tasks) {
		 if (task.status) completed++
		 if (task.flag) flagged++
	  }
	  setStatus({type: 'completed', payload: completed})
	  setStatus({type: 'flagged', payload: flagged})
   }

   useEffect(() => {
	  tasksStatus()
		 .then(null)
   }, [storeTasks.tasks])

   return (
	  <div className={styles.tiles}>
		 <div className={styles.tiles_container}>
			<img className={styles.alltasks_icon} src={alltasks} alt=""/>
			<div className={styles.tiles_count}>{storeTasks.tasks.length}</div>
			<div className={styles.tiles_title}>All</div>
		 </div>
		 <div className={styles.tiles_container}>
			<img className={styles.flagged_icon} src={flagged} alt="flagged"/>
			<div className={styles.tiles_count}>{status.flagsTasks}</div>
			<div className={styles.tiles_title}>Flagged</div>
		 </div>
		 <div className={styles.tiles_container}>
			<img className={styles.completed_icon} src={completed} alt=""/>
			<div className={styles.tiles_count}>{status.completedTasks}</div>
			<div className={styles.tiles_title}>Completed</div>
		 </div>
	  </div>
   );
};

export default Tiles;
