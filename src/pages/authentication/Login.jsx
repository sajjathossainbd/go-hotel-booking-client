import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

function Login() {
  const { singInWithGoogleAuth } = useContext(AuthContext);
  const handleLogin = () => {
    singInWithGoogleAuth();
  };
  return (
    <div>
      <button onClick={handleLogin}>Google Login</button>
    </div>
  );
}

export default Login;
