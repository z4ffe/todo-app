import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllTasks = createAsyncThunk('Task/fetchAllTasks', async (data) => {
   try {
	  const response = await axios.get(`${process.env.REACT_APP_SERVER}/api/tasks`)
	  return response.data
   } catch (error) {
	  throw error
   }
})

export const addTask = createAsyncThunk('Task/addTask', async (data) => {
   try {
	  const response = await axios.post(`${process.env.REACT_APP_SERVER}/api/add`, {
		 task: data
	  })
	  return response.data
   } catch (error) {
	  throw error
   }
})

export const completeTask = createAsyncThunk('Task/completeTask', async (data) => {
   try {
	  const response = await axios.patch(`${process.env.REACT_APP_SERVER}/api/complete`, {
		 _id: data._id
	  })
	  return response.data
   } catch (error) {
	  throw error
   }
})

export const flagTask = createAsyncThunk('Task/flagTask', async (data) => {
   try {
	  const response = await axios.patch(`${process.env.REACT_APP_SERVER}/api/flag`, {
		 _id: data._id
	  })
	  return response.data
   } catch (error) {
	  throw error
   }
})

export const deleteTaskById = createAsyncThunk('Task/deleteTaskById', async (data) => {
   try {
	  const response = await axios.delete(`${process.env.REACT_APP_SERVER}/api/remove`, {
		 data: {
			_id: data._id
		 }
	  })
	  return response.data
   } catch (error) {
	  throw error
   }
})

export const deleteAllTasks = createAsyncThunk('Task/deleteAllTasks', async (data) => {
   try {
	  const response = await axios.delete(`${process.env.REACT_APP_SERVER}/api/removeall`, {})
	  return response.data
   } catch (error) {
	  throw error
   }
})
