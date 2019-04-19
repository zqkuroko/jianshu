import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {
  HomeWapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style';
import { actionCreators } from './store';

class Home extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  render () {
  	return (
      <HomeWapper>
      	<HomeLeft>
      		<img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4590/7f1edd154f90446a038d6ecd10bebf6e8929fbf5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
      	  <Topic/>
      	  <List/>
      	</HomeLeft>
      	<HomeRight>
      		<Recommend/>
          <Writer/>
      	</HomeRight>
        {
          this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null
        } 
      </HomeWapper>
  	)
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow);
  }
  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow);
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 200) {
      dispatch(actionCreators.toggleTopShow(true));
    } else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
})

export default connect(mapState, mapDispatch)(Home);