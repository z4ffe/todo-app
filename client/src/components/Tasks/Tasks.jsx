import React from 'react';
import Task from "../Task/Task";
import {useSelector} from "react-redux";

const Tasks = () => {
   const storeTasks = useSelector(state => state.task)

   return (
	  <div>
		 {storeTasks.loading ? 'Loading' : storeTasks.tasks.map((task) => {
			if (!task.status) return (<Task key={task._id} props={task}/>)
		 })}
		 <hr/>
		 {storeTasks.loading ? 'Loading' : storeTasks.tasks.map((task) => {
			if (task.status) return (<Task key={task._id} props={task}/>)
		 })}
	  </div>
   );
};

export default Tasks;

