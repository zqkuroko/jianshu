import React, { Component } from 'react';
import { DetailWapper, Header, Content } from './style';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actionCreators } from './store';

class Detail extends Component {
  render () {
  	return (
      <DetailWapper>
      	<Header>{this.props.title}</Header>
      	<Content dangerouslySetInnerHTML={{__html: this.props.content}}></Content>
      </DetailWapper>
  	)
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getDetail(id);
  }
}

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
});

const mapDispatch = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id));
  }
})

export default connect(mapState, mapDispatch)(withRouter(Detail));