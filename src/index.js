import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import './index.css';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { connect } from 'react-redux';
import { addMessage } from './action-creators/simpleAction';

const mapStateToProps = (state) => {
 return {messages: state}
};

const mapDispatchToProps = (dispatch) => {
 return {
   submitNewMessage: (message) => {
     dispatch(addMessage(message))
   }
 }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(App);


ReactDOM.render(
     <Provider store={store}>
       <Container />
     </Provider>, 
     document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
