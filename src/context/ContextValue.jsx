import { useState, createContext, useContext } from "react";

const ContextValue = createContext()

export const ContextValueProvider = ({children}) => {

    const [showNotification, setShowNotification] = useState(false)

    const value = {
        showNotification,
        setShowNotification
    }

    return <ContextValue.Provider value={ value }>
        {children}
    </ContextValue.Provider>
}

export const useContextValue = () => {
    return useContext(ContextValue)
}