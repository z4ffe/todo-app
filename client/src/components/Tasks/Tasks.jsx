import React from 'react';
import Task from "../Task/Task";
import {useSelector} from "react-redux";
import styles from './Tasks.module.css'
import Spinner from "../../utils/Spinner/Spinner";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";

const Tasks = () => {
   const storeTasks = useSelector(state => state.task)


   const onEnd = (drag) => {
	  console.log(drag)
   }

   return (
	  <div className={styles.tasks}>
		 {/* {!storeTasks.loading && storeTasks.tasks.map((task) => {
			if (task.flag && !task.status) return (<Task key={task._id} props={task}/>)
		 })}*/}
		 <DragDropContext onDragEnd={onEnd}>
			<Droppable droppableId="1234667">
			   {(provided) => (
				  storeTasks.loading ? <Spinner/> :
					 <div ref={provided.innerRef}>
						{storeTasks.tasks.map((task, idx) => (
							  <Draggable draggableId={`${idx}`} key={task._id} index={+task.order}>
								 {(provided) => (
									   <Task key={task._id} props={task} innerRef={provided.innerRef}/>
								 )}
							  </Draggable>
						   )
						)}
						{provided.placeholder}
					 </div>
			   )}
			</Droppable>
		 </DragDropContext>
		 {/*{!storeTasks.loading && storeTasks.tasks.map((task) => {
			if (task.status) return (<Task key={task._id} props={task}/>)
		 })}*/}
	  </div>
   );
};

export default Tasks;

