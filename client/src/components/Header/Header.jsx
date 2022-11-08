import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAllTasks, addTask} from "../../store/thunk/taskThunk";
import {changeUserInput, setSearchMode} from "../../store/reducer/task";
import styles from './Header.module.css'
import {ShowToast} from "../../utils/toastConfig";

const Header = () => {
   const dispatch = useDispatch()
   const storeTasks = useSelector(state => state.task)
   const userInput = useRef(null)

   const newTask = () => {
	  if (!storeTasks.userInput) {
			ShowToast('notification', `New task can't be empty`)
		 return
	  }
	  dispatch(addTask(storeTasks.userInput))
	  dispatch(changeUserInput(''))
	  userInput.current.value = ''
   }

   useEffect(() => {
	  userInput.current.focus()
	  dispatch(changeUserInput(''))
	  userInput.current.value = ''
   }, [storeTasks.searchMode])

   useEffect(() => {
	  dispatch(fetchAllTasks())
	  userInput.current.focus()
   }, [])

   window.onkeydown = (e) => {
	  if (e.key === 'Enter' && !storeTasks.searchMode) newTask()
	  if (e.key === 'Escape') userInput.current.value = ''
   }

   return (
	  <header className={styles.header}>
		 <div className={styles.header_controls}>
			<input ref={userInput} type="text" onChange={(e) => dispatch(changeUserInput(e.target.value))}
				   placeholder={storeTasks.searchMode ? 'Search' : 'Add new todo'}/>
			<button onClick={() => dispatch(setSearchMode())}
					className={storeTasks.searchMode ? styles.search_btn_active : styles.search_btn}>
			   <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
				  <path clipRule="evenodd"
						d="M19.4367 18.1874L14.3341 13.2675C16.9506 9.83395 16.3652 4.9428 13.0125 2.22363C11.593 1.07744 9.82433 0.450934 7.99985 0.448034C5.58669 0.440824 3.3008 1.5298 1.78596 3.40828C0.45078 5.05041 -0.17257 7.15814 0.0546496 9.26235C0.27161 11.3687 1.32209 13.3007 2.972 14.6279C4.39284 15.7744 6.16307 16.4004 7.98878 16.4021C9.73965 16.3994 11.4413 15.8223 12.8326 14.7594L17.9448 19.6779C18.1428 19.8847 18.4169 20.0013 18.7032 20.0003C18.9767 20.0008 19.2396 19.8951 19.4367 19.7056C19.6385 19.5115 19.7545 19.245 19.7592 18.9652C19.762 18.6728 19.6456 18.3919 19.4367 18.1874ZM13.8539 8.44583C13.8411 11.6671 11.2349 14.2763 8.01369 14.293C4.78158 14.293 2.16192 11.6752 2.15963 8.44445C2.16421 5.21458 4.78383 2.59868 8.0137 2.59869C11.2387 2.60631 13.8501 5.22083 13.8539 8.44584L13.8539 8.44583Z"/>
			   </svg>
			</button>
			{<button onClick={() => newTask()} style={{opacity: storeTasks.searchMode ? '0' : '1'}}
					 className={styles.add_btn}>
			   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
				  <path
					 d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/>
			   </svg>
			</button>}
		 </div>
	  </header>
   );
};

export default Header;
