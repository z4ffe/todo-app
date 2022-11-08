import React, {useEffect, useState} from 'react';
import styles from './Layout.module.css'
import battery from '../images/svg/battery.svg'
import cellular from '../images/svg/cellular.svg'
import wifi from '../images/svg/wifi.svg'
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = (props) => {
   let date = new Date()
   const [time, setTime] = useState(`${date.toLocaleTimeString().slice(0, 5)}`)

   const timeUpdate = () => {
	  setInterval(() => {
		 setTime(() => (`${date.toLocaleTimeString().slice(0, 5)}`))
	  }, 1000)
   }

   useEffect(() => {
	  timeUpdate()
	  return () => {
		 timeUpdate()
	  }
   })

   return (
	  <div className={styles.wrapper}>
		 <div className={styles.wrapper__time}>{time}</div>
		 <div className={styles.wrapper__service}>
			<img src={cellular} alt="battery icon"/>
			<img src={wifi} alt="battery icon"/>
			<img src={battery} alt="battery icon"/>
		 </div>
		 <div className={styles.frame}></div>
		 <div className={styles.camera}></div>
		 <div className={styles.speaker}></div>
		 <ToastContainer limit={3}/>
		 {props.children}
	  </div>
   );
};

export default MainLayout;
