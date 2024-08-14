import { useContext, createContext, useReducer } from "react";
import { loginReducer } from "../reducers/loginReducer";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const initialState = {
    email: "",
    password: "",
    token: {
      access_token: localStorage.getItem("token") || "",
      refresh_token: "",
    },
  };
  const [state, dispatch] = useReducer(loginReducer, initialState);
  return (
    <LoginContext.Provider value={{ state, dispatch }}>
      {children}
    </LoginContext.Provider>
  );
};

const useLogin = () => useContext(LoginContext);

export { LoginProvider, useLogin };
