import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllTasks = createAsyncThunk('task/fetchAllTasks', async (data) => {
   try {
	  const response = await axios({
		 methods: "GET",
		 url: `${process.env.REACT_APP_SERVER}/api/tasks`
	  })
	  return response.data
   } catch (error) {
	  throw error
   }
})

export const addTask = createAsyncThunk('task/addTask', async (data) => {
   try {
	  await axios.post(`${process.env.REACT_APP_SERVER}/api/add`, {
		 task: data
	  })
   } catch (error) {
	  throw error
   }
})

export const deleteTaskById = createAsyncThunk('task/deleteTaskById', async (data) => {
   try {
	  await axios.delete(`${process.env.REACT_APP_SERVER}/api/remove`, {
		 data: {
			_id: data._id
		 }
	  })
   } catch (error) {
	  throw error
   }
})
