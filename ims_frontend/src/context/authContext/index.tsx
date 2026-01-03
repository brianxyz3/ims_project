import type { User } from "@/types/user";
import React, { useContext, createContext, useEffect, useState, type ReactNode } from "react";
// import { jwtDecode } from "jwt-decode";


interface AuthProviderType {
  children: ReactNode;
}

interface AuthContextType {
  user: User | undefined;
  userLoggedIn: boolean;
  isLoading: boolean;
  handleUserState: (user: User) => void;
  handleLogInState: (state: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext)
  if(!context) throw new Error("No Authentication Context found")
  return context;
};

const AuthProvider: React.FC<AuthProviderType> = ({children}) => {
  const cookieObj: Record<string, string> = {};
  const [user, setUser] = useState<User | undefined>(undefined);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  
  const handleLogInState = (state: boolean) => {
    setUserLoggedIn(state);
  }

  const handleUserState = (user: User) => {
    setUser({...user});
  }

  
  useEffect(() => {
    updateUser();      
  }, [userLoggedIn]);

  const updateUser = () => {
    parseCookie(document.cookie);
    const {token} = cookieObj;
    try{
      if(token) {
        // const decodedToken: User = jwtDecode(token);
        // setUser((prevUser) => (
        //   {...prevUser, email: decodedToken.email, id: decodedToken.id, userRole: decodedToken.userRole, token}
        // ));
        setUserLoggedIn(true);
      }
    } catch(err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };


  const parseCookie = (cookieString: string) => {
    const splitCookie = cookieString.split(";");
    splitCookie.forEach(cookie => {
      const [key, value] = cookie.trim().split("=");
      cookieObj[key] = value;
    });
    return cookieObj;
  }

  const value  = {
    user,
    userLoggedIn,
    isLoading,
    handleUserState,
    handleLogInState,
  }
  

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;