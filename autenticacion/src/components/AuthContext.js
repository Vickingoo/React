import { createContext, useEffect, useState } from "react";
import Login from "./Login";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const [user, setUser] = useState();

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {user ? props.children : <Login />}
        </AuthContext.Provider>
    );
};