import React from 'react';
import Task from "../Task/Task";
import {useSelector} from "react-redux";
import styles from './Tasks.module.css'
import Spinner from "../../utils/Spinner/Spinner";

const Tasks = () => {
   const storeTasks = useSelector(state => state.task)

   return (
	  <div className={styles.tasks}>
		 {!storeTasks.loading && storeTasks.tasks.map((task) => {
			if (task.flag) return (<Task key={task._id} props={task}/>)
		 })}
		 {storeTasks.loading ? <Spinner/> : storeTasks.tasks.map((task) => {
			if (!task.status && !task.flag) return (<Task key={task._id} props={task}/>)
		 })}
		 {!storeTasks.loading && storeTasks.tasks.map((task) => {
			if (task.status) return (<Task key={task._id} props={task}/>)
		 })}
	  </div>
   );
};

export default Tasks;

