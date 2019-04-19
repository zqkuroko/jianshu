import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Write extends Component {
  render () {
    const { isLogin } = this.props;
    if (isLogin) {
      return (
        <div>write</div>
      )
    } else {
      return <Redirect to="/login" />
    }
  }
}

const mapState = (state) => ({
  isLogin: state.getIn(['login', 'isLogin'])
});


export default connect(mapState, null)(Write);