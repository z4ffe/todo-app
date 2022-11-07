import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAllTasks, addTask} from "../../store/thunk/taskThunk";
import Task from "../Task/Task";
import {setSearchMode} from "../../store/reducer/task";

const Header = () => {
   const dispatch = useDispatch()
   const storeTasks = useSelector(state => state.task)
   const inputTask = useRef()

   useEffect(() => {
	  dispatch(fetchAllTasks())
   }, [])

   return (
	  <div>
		 <h1>App</h1>
		 <button onClick={() => dispatch(setSearchMode())}>SEARCH MODE</button>
		 {storeTasks.searchMode ? <span>Search On</span> : <span>Search Off</span>}
		 <hr/>
		 <input type="text" ref={inputTask}/>
		 <button onClick={() => dispatch(addTask(inputTask.current.value))}>ADD</button>
		 <hr/>
	  </div>
   );
};

export default Header;
