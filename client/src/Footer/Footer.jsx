import React from 'react';
import {useDispatch} from "react-redux";
import {deleteAllTasks} from "../store/thunk/taskThunk";
import styles from './Footer.module.css'

const Footer = () => {
   const dispatch = useDispatch()

   return (
	  <footer className={styles.footer}>
		<button onClick={() => dispatch(deleteAllTasks())}>Delete all tasks</button>
	  </footer>
   );
};

export default Footer;
