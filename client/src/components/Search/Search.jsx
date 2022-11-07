import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Task from "../Task/Task";
import {setFilteredTasks} from "../../store/reducer/task";

const Search = () => {
   const storeTasks = useSelector(state => state.task)
   const dispatch = useDispatch()


   useEffect(() => {
	  dispatch(setFilteredTasks(storeTasks.tasks.filter(el => el.task.includes(storeTasks.userInput))))
   }, [storeTasks.tasks])

   useEffect(() => {
	  dispatch(setFilteredTasks(storeTasks.tasks.filter(el => el.task.includes(storeTasks.userInput))))
   }, [storeTasks.userInput])

   return (
	  <>
		 {!storeTasks.tasksFiltered ? storeTasks.tasks.map(task => (<Task key={task._id} props={task}/>))
			: storeTasks.tasksFiltered.map(task => (<Task key={task._id} props={task}/>)
			)}
	  </>
   );
};

export default Search;

