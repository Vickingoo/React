import { useState } from "react";
import { LoginForm } from "./LoginForm";

export function Auth(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleAuth = (isAuthenticated) => {
        setIsLoggedIn(isAuthenticated)
    }

    return isLoggedIn ? props.children : <LoginForm handleAuth={handleAuth} />
}