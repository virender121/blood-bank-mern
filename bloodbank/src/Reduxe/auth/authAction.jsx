import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../services/Api";
import {toast} from 'react-toastify';


export const userLogin = createAsyncThunk(
    "auth/login",
    async({ role, email, password}, { rejectWithvalue}) => {
        try {
            const data = await API.post("auth/login", {role,email, password});

            if(data.success){
                alert( data.message);
                localStorage.setItem("token", data.token);
                window.location.replace('/')
            }
            return data;
        } catch (error){
           if(error.response && error.response.data.message){
            return rejectWithvalue(error.response.data.message);
           } else {
            return rejectWithvalue(error.message);
           }
        }
    }
);

// Register

export const userRegister = createAsyncThunk(
    "auth/register",
    async({  name,
        role,
        email,
        password,
        phone,
        organisationName,
        address,
        hospitalName}, {rejectWithvalue})=>{
            try{
                const data = await API.post("/auth/register",{
                    name, role, email, password, phone, organisationName,address,hospitalName
                });
                if(data?.success){
                    alert("User Register Successfully")
                    window.location.replace("/")
                }
            } catch (error){
                console.log(error);
                if(error.response && error.response.data.message){
                    return rejectWithvalue(error.response.data.message);
                } else{
                    return rejectWithvalue(error.message);
                }
            }
        }
);


export const getCurrentUser = createAsyncThunk(
    "auth/getCurrentUser",
    async({rejectWithvalue}) =>{
        try{
            const res = await API.get("/auth/current-user");
            if(res.data){
                return res?.data;
            }
        } catch (error) {
            console.log(error);
            if (error.response && error.response.data.message) {
              return rejectWithvalue(error.response.data.message);
            } else {
              return rejectWithvalue(error.message);
            }
        }
    }
)
