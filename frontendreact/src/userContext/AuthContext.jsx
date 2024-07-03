import { createContext, useContext, useEffect, useState } from "react";

import { loginRequest, registerRequest } from "../api/authe";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children}) => {
  const [user, setUser] = useState(null);
  const [authentication, setAuthentication] = useState(false);
  const [error, setError] = useState([]);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res.data);
      setUser(res, "hola miundo");
      setAuthentication(true);
    } catch (error) {
      console.log(error, "error");
      setError(error.response.data);
    }
  };

  const login = async (user) => {
try {
  const res = await loginRequest(user);
  console.log(res.data);
  setUser(res.data);
  setAuthentication(true);

  setError([]);
} catch (err) {

  console.log(err, "error");
if(Array.isArray(err.response.data)){
  return  setError(err.response.data);
}else{
  setError(err);
}
console.log(err, "error");
const errorData = err.response && err.response.data ? err.response.data : { error: ["Login error"] };
const errorMessages = Array.isArray(errorData.error) ? errorData.error : [errorData.message || "An error occurred"];
setError(errorMessages);
}
    
  }
  useEffect(() => {
    if(error.length > 0) {
      const timer = setTimeout(() => {
        setError([])
      }, 5000);
      return () => clearTimeout(timer);
      
      
    }

  },[error]);
  return (
    <AuthContext.Provider
      value={{
        signup,
        user,
        error,
        login,
        authentication,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
