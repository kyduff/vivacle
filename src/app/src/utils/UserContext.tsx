import { createContext, useMemo, useState, useEffect, SetStateAction, Dispatch } from "react";
import { getAddress } from "./metamask";

interface User {
  address: string | undefined
}

interface UserContext {
  user: User;
  setUser: (c: User) => void;
}

export const UserContext = createContext<UserContext>({
  user: {address: ''}, 
  setUser: () => {}
});

export const UserContextProvider: React.FC = ({ children }) => {

  const [user, setUser] = useState<User>({address: ''});
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  useEffect(() => {
    const setAddress = async () => {
      setUser({ address: await getAddress() })
    }
    setAddress();
    console.log("User was fetched")
}, []);

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}