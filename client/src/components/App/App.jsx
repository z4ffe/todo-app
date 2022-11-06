import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteTaskById, fetchAllTasks, addTask, completeTask} from "../../store/thunk/taskThunk";

const App = () => {
   const dispatch = useDispatch()
   const storeTasks = useSelector(state => state.task)
   const inputTask = useRef()

   useEffect(() => {
	  dispatch(fetchAllTasks())
   }, [])

   return (
	  <div>
		 <h1>App</h1>
		 <hr/>
		 <input type="text" ref={inputTask}/>
		 <button onClick={() => dispatch(addTask(inputTask.current.value))}>ADD</button>
		 <hr/>
		 {storeTasks.loading ? 'Loading' : storeTasks.tasks.map((task) => (
			<div key={task._id}>
			   {!task.status ? <span>{task.task}</span> : <span style={{color: "red"}}>{task.task}</span>}
			   <button onClick={() => dispatch(completeTask(task))}>CHECK</button>
			   <button onClick={() => dispatch(deleteTaskById(task))}>DEL</button>
			</div>
		 ))}
	  </div>
   );
};

export default App;
