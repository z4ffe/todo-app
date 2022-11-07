import React, {useState} from 'react';
import {flagTask} from "../../store/thunk/taskThunk";
import {useDispatch, useSelector} from "react-redux";
import styles from './Task.module.css'
import TaskDropDown from "./TaskDropDown";
import dropDownIcon from '../../images/svg/dropdown.svg'
import unflagged from '../../images/svg/unflagged.svg'
import flagged from '../../images/svg/flagged-task.svg'

const Task = ({props}) => {
   let [menu, setMenu] = useState(false)
   const dispatch = useDispatch()

   return (
	  <div className={styles.task} key={props._id}>
		 {props.flag && <button className={styles.flag_btn}><img src={flagged} alt=""/></button>}
		 {!props.status ? <div className={styles.task_container}>{props.task}</div> : <div style={{color: "red"}}>{props.task}</div>}
		 <button className={styles.dropdown_btn} onClick={() => setMenu(!menu)}><img src={dropDownIcon} alt=""/>
		 </button>
		 {menu && <TaskDropDown props={props}/>}
	  </div>
   );
};

export default Task;
