import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser, userLogin, userRegister , submitDonorForm, submitRequestForm} from "./authAction";

const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

const initialState = {
  loading: false,
  user: null,
  token,
  error: null,
  isAuthenticated: false,
  donor: null,
  reciever:null

};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    donorAdded: (state , action ) => {
      state.donor = action.payload;
    },
    reciverAdded: (state,action) => {
      state.reciever = action.payload;
    }
  },
  extraReducers: (builder) => {
    // login user
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user = payload.user;
      state.token = payload.token;
    });
    builder.addCase(userLogin.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    // REGISTER user
    builder.addCase(userRegister.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userRegister.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user = payload.user;
    });
    builder.addCase(userRegister.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    // CURRENT user
    builder.addCase(getCurrentUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getCurrentUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user = payload.user;
    });
    builder.addCase(getCurrentUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    // new-donor
    builder.addCase(submitDonorForm.pending, (state) => {
      state.loading = true;
      state.error =null;
    })
    builder.addCase(submitDonorForm.fulfilled,(state, {payload}) => {
      state.loading = false;
      state.donor = payload.donor;
    })
    builder.addCase(submitDonorForm.rejected,(state, {payload}) => {
      state.loading = false;
      state.error = payload;
    })
    builder.addCase(submitRequestForm.pending, (state) =>{
      state.loading = true;
      state.error=null;
    })
    builder.addCase(submitRequestForm.fulfilled, (state,{payload}) => {
      state.loading = false;
      state.error = payload.reciever;
    })
    builder.addCase(submitRequestForm.rejected, (state, {payload}) =>{
      state.loading = false;
      state.error = payload;
    })
  },
});

export const {donorAdded} = authSlice.actions;
export default authSlice;
