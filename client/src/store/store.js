import {configureStore} from "@reduxjs/toolkit";
import taskReducer from "./reducer/task";

export const store = configureStore({
   reducer: {
	  task: taskReducer
   }
})
