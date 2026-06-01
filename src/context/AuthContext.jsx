import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    function login() {
        setUser({
            name: "root",
            passwoord: "root",
        });
    }
    function logout() {
        setUser(null);
    }
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
