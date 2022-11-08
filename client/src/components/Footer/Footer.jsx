import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteAllTasks} from "../../store/thunk/taskThunk";
import styles from './Footer.module.css'
import {ShowToast} from "../../utils/toastConfig";

const Footer = () => {
   const dispatch = useDispatch()
   const storeTasks = useSelector(state => state.task)

   const deleteAll = () => {
	  if (storeTasks.tasks.length) {
		 ShowToast('notification', 'All tasks deleted')
		 dispatch(deleteAllTasks())
	  } else ShowToast('notification', 'Already empty')
   }

   return (
	  <footer className={styles.footer}>
		 <button onClick={() => deleteAll()}>Delete all tasks</button>
	  </footer>
   );
};

export default Footer;
