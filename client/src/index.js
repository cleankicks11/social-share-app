import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'rreact-redux';

import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);