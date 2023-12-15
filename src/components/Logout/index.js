const Logout = props => {
  const {onLogout} = props

  return (
    <button type="button" onClick={onLogout}>
      LogOut
    </button>
  )
}

export default Logout
