import React, { Component, Fragment } from 'react';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import Write from './pages/write';
import { Globalstyle } from './style';
import { GlobalIconFont } from './statics/iconfont/iconfont';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';


class App extends Component {
  render() {
    return (
      <Fragment>
        <Globalstyle/>
        <GlobalIconFont/>
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Header/>
              <Route path='/' exact component={Home}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/write' exact component={Write}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
