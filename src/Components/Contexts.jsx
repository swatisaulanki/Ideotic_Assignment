import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Contextsfetch = createContext();
export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    setIsAuth(true);
    navigate("/");
  };

  const logout = () => {
    setIsAuth(false);
  };

  return (
    <Contextsfetch.Provider value={{ isAuth, login, logout }}>
      {children}
    </Contextsfetch.Provider>
  );
};