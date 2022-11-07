import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAllTasks, addTask} from "../../store/thunk/taskThunk";
import {changeUserInput, setSearchMode} from "../../store/reducer/task";

const Header = () => {
   const dispatch = useDispatch()
   const storeTasks = useSelector(state => state.task)

   useEffect(() => {
	  dispatch(fetchAllTasks())
   }, [])

   return (
	  <div>
		 <h1>App</h1>
		 <button onClick={() => dispatch(setSearchMode())}>SEARCH MODE</button>
		 {storeTasks.searchMode ? <span>Search On</span> : <span>Search Off</span>}
		 <hr/>
		 <input type="text" onChange={(e) => dispatch(changeUserInput(e.target.value))}/>
		 <button onClick={() => dispatch(addTask(storeTasks.userInput))}>ADD</button>
		 <hr/>
	  </div>
   );
};

export default Header;
