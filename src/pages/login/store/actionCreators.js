import axios from 'axios';
import * as constans from './constans';


const changeLogin = () => ({
  type: constans.CHANGE_LOGIN,
  value: true
});

export const toLogout = () => ({
  type: constans.CHANGE_LOGOUT,
  value: false
});



export const toLogin = (account, password) => {
	return (dispatch) => {
		axios.get('/api/login.json?account=' + account + '&password=' + password).then((res) => {
			const result = res.data.data;
			if (result) {
				dispatch(changeLogin());
			} else {
				console.log('登录失败');
			}
		})
	}
};