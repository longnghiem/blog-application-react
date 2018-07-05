import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux'
import reducer from './store/reducers/postsReducer'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom';


const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
<BrowserRouter>    
    <Provider store={store}>
        <Route component={App} />
    </Provider>
</BrowserRouter>    
, document.getElementById('root'));
registerServiceWorker();
