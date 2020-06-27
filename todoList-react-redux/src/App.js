import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TodoList from './component/TodoList';
import { reducer } from './reducer/index';

const store = createStore(reducer);

function App(){
    return(
        <Provider store={ store } >
            <TodoList></TodoList>
        </Provider>
    )
}


ReactDOM.render( <App />, document.getElementById('root') );