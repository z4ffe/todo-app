import React from 'react';
import {completeTask, deleteTaskById} from "../../store/thunk/taskThunk";
import {useDispatch} from "react-redux";

const Task = ({props}) => {
   const dispatch = useDispatch()

   return (
	  <div key={props._id}>
		 {!props.status ? <span>{props.task}</span> : <span style={{color: "red"}}>{props.task}</span>}
		 {<span> - {`${new Date(props.date).toLocaleTimeString().slice(0, 5)}`}</span>}
		 <button onClick={() => dispatch(completeTask(props))}>CHECK</button>
		 <button onClick={() => dispatch(deleteTaskById(props))}>DEL</button>
	  </div>
   );
};

export default Task;
