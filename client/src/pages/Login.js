import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder="Username" />
        <input required type="password" placeholder="Password" />
        <button type="submit">Login</button>
        <p>This is an error!</p>
        <span>
          New to Blogdgy? <Link to="/register">Sign Up</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
