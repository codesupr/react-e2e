import { createContext, useContext, useState } from "react"
import App from "./App";

const db = {
    user: 'sunnypr',
    pass: '123456'
}

const AuthContext = createContext({
    user: { name: '', loggedIn: false },
    login: (_name: string, _pass: string) => { },
    logout: () => { }
});

export const useAuth = () => useContext(AuthContext);

export const AuthWrapper = () => {

    const [user, setUser] = useState({ name: "", loggedIn: false })

    const login = (userName: string, password: string) => {

        // Make a call to the authentication API to check the username
        console.log(userName, password)
        return new Promise((resolve, reject) => {

            if (password === db.pass && userName === db.user) {
                setUser({ name: userName, loggedIn: true })
                resolve("success")
            } else {
                reject("Incorrect password")
            }
        })


    }
    const logout = () => {

        setUser({ ...user, loggedIn: false })
    }


    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            <App />
        </AuthContext.Provider>

    )

}