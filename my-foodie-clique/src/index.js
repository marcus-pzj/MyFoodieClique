import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './Components/App';
import './styles/stylesheet.css' ;
import {createStore} from 'redux'
import rootReducer from './redux/reducer'
import {Provider} from 'react-redux'

const store = createStore(rootReducer)


ReactDOM.render(<Provider store = {store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'));
