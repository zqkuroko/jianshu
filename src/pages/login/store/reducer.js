import { fromJS } from 'immutable';
import * as constans from './constans';
const defaultState = fromJS({
  isLogin: false
})

export default (state = defaultState, action) => {
	switch(action.type) {
		  case constans.CHANGE_LOGIN:
		    return state.set('isLogin', action.value);
		  case constans.CHANGE_LOGOUT:
		    return state.set('isLogin', action.value);
		  default: 
		    return state;
	}
}