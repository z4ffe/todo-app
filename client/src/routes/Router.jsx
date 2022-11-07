import React from 'react';
import {HashRouter} from "react-router-dom";
import Header from "../components/Header/Header";
import MainLayout from "../layout/MainLayout";
import Tasks from "../components/Tasks/Tasks";
import {useSelector} from "react-redux";
import Search from "../components/Search/Search";
import Tiles from "../components/Tiles/Tiles";
import Footer from "../Footer/Footer";

const Router = () => {
   const storeTasks = useSelector(state => state.task)

   return (
	  <HashRouter>
		 <MainLayout>
			<Tiles/>
			<Header/>
			{storeTasks.searchMode ? <Search/> : <Tasks/>}
			<Footer/>
		 </MainLayout>
	  </HashRouter>
   );
};

export default Router;
