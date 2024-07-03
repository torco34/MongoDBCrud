import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "./userContext/AuthContext";


export const ProtectedRouter = () => {
  const {  authentication} = useAuth();
  if(!authentication) return <Navigate to="/login" replace/>
  return (
    <div>  <Outlet/> </div>
  )
}
