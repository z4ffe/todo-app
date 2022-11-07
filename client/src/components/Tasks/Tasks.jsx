import React from 'react';
import Task from "../Task/Task";
import {useSelector} from "react-redux";
import styles from './Tasks.module.css'

const Tasks = () => {
   const storeTasks = useSelector(state => state.task)

   return (
	  <div className={styles.tasks}>
		 {storeTasks.loading ? 'Loading' : storeTasks.tasks.map((task) => {
			if (!task.status) return (<Task key={task._id} props={task}/>)
		 })}
		 {storeTasks.loading ? 'Loading' : storeTasks.tasks.map((task) => {
			if (task.status) return (<Task key={task._id} props={task}/>)
		 })}
	  </div>
   );
};

export default Tasks;

