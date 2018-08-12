// @flow
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import config from '../config/config';
import {history} from './modules/Store/HistoryFactory';
import {store} from './modules/Store/StoreFactory';
import Routes from './modules/Routing/Routes';

class App extends Component {
    render() {
        const {theme: themeConfig} = config;
        const theme = createMuiTheme(themeConfig);
        return (
            <Provider store={store}>
                <MuiThemeProvider theme={theme}>
                    <Router history={history}>
                        <Routes/>
                    </Router>
                </MuiThemeProvider>
            </Provider>
        );
    }
}

export default App;
