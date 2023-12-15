import {Component} from 'react'

import Login from '../Login'

import Message from '../Message'

import Logout from '../Logout'

import './index.css'

class App extends Component {
  state = {isLogin: false}

  onClickButton = () => {
    this.setState(prevState => ({
      isLogin: !prevState.isLogin,
    }))
  }

  render() {
    const {isLogin} = this.state
    return (
      <div className="bg">
        <Message isLogin={isLogin} />
        {isLogin ? (
          <Logout onLogout={this.onClickButton} />
        ) : (
          <Login onLogin={this.onClickButton} />
        )}
      </div>
    )
  }
}

export default App
