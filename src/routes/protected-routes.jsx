/* eslint-disable react/prop-types */


import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({
  // user,
  redirectPath = '/register',
  children,
  
}) => {
  const { isAuthed } = useSelector((state) => state.auth)
  const token = localStorage.getItem('userToken');
 
  
  if (false) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};
