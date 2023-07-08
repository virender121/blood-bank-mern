import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import API from "../../services/Api";
import { getCurrentUser } from "../../Reduxe/auth/authAction";

const PrivateRoute = () => {
  const dispatch = useDispatch();

  // get user current
  const getUser = async () => {
    try {
      const { data } = await API.get("/auth/current-user");
      if (data?.success) {
        dispatch(getCurrentUser(data));
      }
    } catch (error) {
      localStorage.clear();
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const isAuthenticated = localStorage.getItem("token");

  if (isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to="/signin" />;
  }
};

export default PrivateRoute;
