import React, {useRef, useState, useEffect} from 'react';
import styles from './Task.module.css'
import './Task.module.css'
import TaskDropDown from "./TaskDropDown";
import dropDownIcon from '../../images/svg/dropdown.svg'
import dropDownIconActive from '../../images/svg/dropdown-active.svg'
import flagged from '../../images/svg/flagged-task.svg'
import {CSSTransition} from "react-transition-group";
import {useDispatch, useSelector} from "react-redux";
import {flagTask} from "../../store/thunk/taskThunk";

const Task = ({props}) => {
   const storeTasks = useSelector(state => state.task)
   const dispatch = useDispatch()
   let [menu, setMenu] = useState(false)
   const dropDownMenu = useRef()
   const taskContainer = useRef()

   useEffect(() => {
	  document.addEventListener("mousedown", handleOutsideClicks);
	  return () => document.removeEventListener("mousedown", handleOutsideClicks)
   }, [menu]);

   const handleOutsideClicks = (e) => {
	  if (menu && dropDownMenu.current && !dropDownMenu.current.contains(e.target)) setMenu(false)
   };


   return (
	  <div className={styles.task} key={props._id} ref={taskContainer}>
		 {!props.status ? <div className={styles.task_container}>{props.task}</div> :
			<div style={{color: "#8A8A8D"}}>{props.task}</div>}
		 {props.flag && <button className={styles.flag_btn} onClick={() => dispatch(flagTask(props))}><img src={flagged} alt=""/></button>}
		 <button className={styles.dropdown_btn} onClick={() => setMenu(!menu)}><img src={menu ? dropDownIconActive : dropDownIcon} alt=""/>
		 </button>
		 <CSSTransition nodeRef={dropDownMenu} in={menu} timeout={100} classNames={{
			enterDone: styles.dropdown_animationEnterDone,
			exitDone: styles.dropdown_animationExitDone
		 }}>
			<div className={styles.dropdown_animation} ref={dropDownMenu}>
			   <TaskDropDown props={props}/>
			</div>
		 </CSSTransition>
	  </div>
   )
	  ;
};

export default Task;
