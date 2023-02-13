import React, {createContext, useState} from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [isDoctorAccount, setIsDoctoAccount] = useState(null);
    console.log('Is doctor account (authCOntext): ', isDoctorAccount)
    return (
        <AuthContext.Provider
            value={{
                isDoctorAccount,
                setIsDoctoAccount
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;