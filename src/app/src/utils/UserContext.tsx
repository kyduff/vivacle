import { createContext, useMemo, useState, useEffect, SetStateAction, Dispatch } from "react";
import { useAccount } from "wagmi";

interface User {
  address: string | undefined
}

interface UserContext {
  user: User;
  setUser: (c: User) => void;
}

export const UserContext = createContext<UserContext>({
  user: { address: '' },
  setUser: () => { }
});

export const UserContextProvider: React.FC = ({ children }) => {

  const [user, setUser] = useState<User>({ address: '' });
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  const { data } = useAccount();

  useEffect(() => {
    const setAddress = async () => {
      setUser({ address: data?.address })
    }
    setAddress();
  }, [data]);

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}
