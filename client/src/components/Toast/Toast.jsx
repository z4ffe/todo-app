import React from 'react';
import reminderIcon from '../../images/reminder-icon.png'
import styles from './Toast.module.css'

const Toast = (props) => {
   return (
	  <div className={styles.toast}>
		 <img src={reminderIcon} alt=""/>
		 <div className={styles.toast_title}>Reminders</div>
		 <div className={styles.toast_desc}>{props.content}</div>
		 <div className={styles.toast_now}>now</div>
	  </div>
   );
};

export default Toast;
