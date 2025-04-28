import { createContext, useState } from "react";

export const Usercontext = createContext();


function AuthContextProvider({ children }) {



 
  const [token, settoken] = useState(localStorage.getItem("Token") ||null);

    const handlelogin=(value)=>{
           settoken(value)
           localStorage.setItem("Token", value);
    
    }


  return  <Usercontext.Provider value={{token,handlelogin}}>{children}</Usercontext.Provider>;

  
}

export default AuthContextProvider;
