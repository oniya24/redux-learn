import React from 'react';
import { Button } from 'antd';


function Item(props){
    const { content,deleteItem,itemIndex } = props;
    console.log(deleteItem);
    return(
        <div style={ { 'display': 'flex',width: 400,alignItems: 'center' }} >
            <p>{ content }</p>
            <Button type="primary" style={{ margin: '0 20px' }} width={ 200 } onClick={ ()=>{ deleteItem(itemIndex) } }>删除</Button>
        </div>)
}

export default Item;