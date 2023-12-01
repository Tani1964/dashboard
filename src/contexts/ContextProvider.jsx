import {createContext,  useState} from 'react';


const defualtMenuContextValue = {
    activeMenu: true,
    setActiveMenu: ()=>{}
}


export const MenuContext = createContext(defualtMenuContextValue)

export const MenuContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(defualtMenuContextValue);
    return (
        <MenuContext.Provider
        value={{activeMenu, setActiveMenu}}>
            {children}
        </MenuContext.Provider>
    )
}