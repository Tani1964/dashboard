import { createContext, useState } from "react";

const defaultUserContextValue = {
    user: {
        name: "",
        email: ""
    },
    setUser: () => {}
}

export const UserContext = createContext(defaultUserContextValue)

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(defaultUserContextValue)
    return <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
}
