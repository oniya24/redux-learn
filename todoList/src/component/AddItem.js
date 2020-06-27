import React, { useState } from 'react';
import { Button,Input } from 'antd';

function AddItem(props){
    const { addItem } = props;
    const [ inputVal,setInputVal ] = useState("");
    const changeInputVal = (e)=>{
        setInputVal(e.target.value);
    }
    const handleAddClick = ()=>{
        addItem(inputVal);
    }
    return(
        <div style={ { 'display': 'flex',width: 400 }} >
            <Input onChange={ changeInputVal } ></Input>
            <Button onClick={ handleAddClick  }>增加</Button>
        </div>
    )
}

export default AddItem;