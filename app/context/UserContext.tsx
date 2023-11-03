import { IdTokenResult, User } from "firebase/auth";
import { createContext, useContext, useState } from "react";

interface UserContextType {
    user: User | undefined,
    updateUser: (user: User | undefined) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
    children: React.ReactNode
}

export const UserProvider: React.FC<UserProviderProps> = ({children}) => {
    const [user, setUser] = useState<User | undefined>(undefined);

    const updateUser = (user: User | undefined): void => {
        setUser(user);
    }

    return (
        <UserContext.Provider value={{user, updateUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useCategory must be used within a CategoryProvider');
    }
    return context;
}