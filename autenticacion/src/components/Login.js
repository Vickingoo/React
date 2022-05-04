import { useContext } from "react";
import { postLogin } from "../api/login";
import { AuthContext } from "./AuthContext";

function Login() {
  const context = useContext(AuthContext);

  console.log(context);

  const handleLogin = () => {
    postLogin().then((data) => context.setUser(data));
  };

  return (
    <div>
      <button onClick={handleLogin}>LOGIN</button>
    </div>
  );
}

export default Login;