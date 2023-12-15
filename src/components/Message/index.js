const Message = props => {
  const {isLogin} = props

  if (isLogin) {
    return <h1>Welcome User</h1>
  }
  return <h1>PleaseLogin</h1>
}

export default Message
