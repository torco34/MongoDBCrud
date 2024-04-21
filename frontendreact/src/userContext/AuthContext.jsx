import { createContext, useContext, useState } from "react";
import { registerRequest } from "../api/authe";

export const AuthContext = createContext();
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new error("use must be user");
  }
  return context;
};
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authentication, setAuthentication] = useState(false);
    const [error, setError] = useState([]);
  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res.data);
      setUser(res.data);
      setAuthentication(true);
    } catch (error) {
      console.log(error.response.data)
      setError(error.response.data)
    }
  };
  return (
    <AuthContext.Provider
      value={{
        signup,
        user,
        error,
        authentication,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
