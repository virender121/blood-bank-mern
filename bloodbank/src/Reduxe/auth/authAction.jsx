import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../services/Api";
import { toast } from 'react-toastify';

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await API.post("/auth/login", { email, password });
      const data = response.data;

      if (data.success) {
        toast.success(data.message);
        localStorage.setItem("token", data.token);
        window.location.replace('/');
      }

      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const userRegister = createAsyncThunk(
  "auth/register",
  async ({
    name,
    email,
    password,
    phone,
    address,
   
  }, { rejectWithValue }) => {
    try {
      console.log(  name,
        email,
        password,
        phone,
        address,)
      const response = await API.post("/auth/register", {
        name,
        email,
        password,
        phone,
        address,
      });
      
       console.log(email)
      const data = response.data;

      if (data.success) {
        toast.success("User registered successfully");
        window.location.replace("/");
      }

      return data;
    } catch (error) {
      console.log(error);

      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get("/auth/current-user");
      const data = response.data;

      if (data) {
        return data;
      }
    } catch (error) {
      console.log(error);

      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
