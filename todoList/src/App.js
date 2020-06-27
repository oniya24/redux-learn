import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { store } from './reducer/index';
import Item from './component/Item';
import AddItem from './component/AddItem';

function TodoList(){
    const addItem = (val)=>{
        store.dispatch({
            type: 'addItem',
            val: val
        })
        console.log(store.getState());
    }
    const deleteItem = (index)=>{
        store.dispatch({
            type: 'deleteItem',
            index: index
        })
    }
    const itemList = (()=>{
        const res = [];
        const state = store.getState();
        for(let i = 0; i < state.length; i++){
            res.push(
                <Item itemIndex={ i } content={ state[i] } 
                key={ state[i] + i } deleteItem={ deleteItem }></Item>
            )
        }
        return res
    })();
    return (
        <div >
            <AddItem addItem={ addItem }></AddItem>
            <div>
                { itemList }
            </div>
        </div>
    )
}
const render = ()=>{
    ReactDOM.render(
        <TodoList />,
        document.getElementById('root'))
}
render();
store.subscribe(render);
