import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from './Redux';
import history from './Services/history';

// Styles
import '@coreui/icons/css/coreui-icons.min.css';
import 'flag-icon-css/css/flag-icon.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'simple-line-icons/css/simple-line-icons.css';
import './App.scss'

import { DefaultLayout } from './Containers';
//import LoginContainer from './Containers/Login/LoginContainer';

const store = createStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Switch>
                        {/*<Route exact path='/login' name='Login Page' component={LoginContainer} />*/}
                        <Route path='/' component={DefaultLayout} />
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

export default App;
