import React from 'react';
import ReactDOM from 'react-dom';
import {App} from '@evo/client';
import {webSocketsServer} from '@evo/server';

// start the server
webSocketsServer.connect();

// render the app
ReactDOM.render(<App />, document.getElementById('app'));
