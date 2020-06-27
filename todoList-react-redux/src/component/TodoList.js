import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import AddItem from './AddItem';

function TodoList(props){
    const [ test,setTest ] = useState(0);
    const { stateList,addItem,deleteItem } = props;
    useEffect(()=>{
        setTest(test + 1);
    },[ stateList ]);
    // console.log(stateList)
    // console.log(deleteItem)
    const itemList = (()=>{
        const res = [];
        for(let i = 0; i < stateList.length; i++){
            res.push(
                <Item itemIndex={ i } content={ stateList[i] } 
                key={ stateList[i] + i } deleteItem={ deleteItem }></Item>
            )
        }
        return res
    })();
    return (
        <div >
            { test }
            <AddItem addItem={ addItem }></AddItem>
            <div>
                { itemList }
            </div>
        </div>
    )
}
const mapStateToProps = ( state ) => {
    return {
        stateList: state
    }
}
const mapDispatchToProps = ( dispatch ) => {
    return {
        addItem: function(val){
            dispatch({
                type: 'addItem',
                val: val
            })
        },
        deleteItem: function(index){
            console.log(index)
            dispatch({
                type: 'deleteItem',
                index: index
            })
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
