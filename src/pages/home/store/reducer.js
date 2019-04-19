import { fromJS } from 'immutable';
import * as constans from './constans';

const defaultState = fromJS({
	topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
});

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList)
  })
}

const addArticleList = (state, action) => {
  return state.merge({
    'articleList': state.get('articleList').concat(fromJS(action.list)),
    'articlePage': action.nextPage
  })
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case constans.CHANGE_HOME_DATA:
      return changeHomeData(state, action)
    case constans.ADD_ARTICLE_LIST:
      return addArticleList(state, action)
    case constans.TOGGLE_TOP_SHOW: 
      return state.set('showScroll', action.show)
    default:
      return state;
  }
}