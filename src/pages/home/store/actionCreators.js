import * as constans from './constans';
import axios from 'axios';

const changeHome = (result) => ({
	type: constans.CHANGE_HOME_DATA,
	topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
});

const addHomeList = (list, nextPage) => ({
  type: constans.ADD_ARTICLE_LIST,
  list,
  nextPage
});


export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data;
      dispatch(changeHome(result));
    })
  }
};

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      const result = res.data.data;
      dispatch(addHomeList(result, page + 1));
    })
  }
};

export const toggleTopShow = (show) => ({
  type: constans.TOGGLE_TOP_SHOW,
  show
});