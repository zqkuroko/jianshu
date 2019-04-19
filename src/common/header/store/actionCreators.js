import * as constans from './constans';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeList = (data) => ({
	type: constans.CHANGE_LIST,
	data: fromJS(data),
  totalPage: Math.ceil( data.length / 10)
});

export const searchFocus = () => ({
  type: constans.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: constans.SEARCH_BLUR
});

export const mouseEnter = () => ({
  type: constans.MOUSE_ENTER
});

export const mouseLeave = () => ({
  type: constans.MOUSE_LEAVE
});

export const changePage = (page) => ({
  type: constans.CHANGE_PAGE,
  page
});

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headList.json').then((res) => {
    	const data = res.data;
    	dispatch(changeList(data.list));
    })
  }
};