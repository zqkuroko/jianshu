import React, { Component } from 'react';
import { LoginWapper, LoginBox, LoginInput, LoginButton } from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  render () {
    const { isLogin } = this.props;
    if (!isLogin) {
      return (
        <LoginWapper>
          <LoginBox>
            <LoginInput placeholder="账号" ref={input => {this.account = input}}/>
            <LoginInput placeholder="密码" type="password" ref={input => {this.password = input}}/>
            <LoginButton onClick={() => this.props.toLogin(this.account, this.password)}>登录</LoginButton>
          </LoginBox>
        </LoginWapper>
      )
    } else {
      return <Redirect to="/" />
    }
  }
}

const mapState = (state) => ({
  isLogin: state.getIn(['login', 'isLogin'])
});

const mapDispatch = (dispatch) => ({
  toLogin(accountElem, passwordElem) {
    dispatch(actionCreators.toLogin(accountElem.value, passwordElem.value));
  }
})

export default connect(mapState, mapDispatch)(Login);