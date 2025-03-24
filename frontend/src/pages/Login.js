function Login() {
    return (
      <div style={{ padding: '40px' }}>
        <h2>Login</h2>
        <form>
          <input placeholder="Email" type="email" />
          <input placeholder="Password" type="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
  
  export default Login;
  