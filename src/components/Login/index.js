const Login = props => {
  const {onLogin} = props
  return (
    <button type="button" className="login" onClick={onLogin}>
      Login
    </button>
  )
}

export default Login
