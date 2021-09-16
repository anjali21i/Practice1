import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";

import './ExpenseItem.css';
//import Card from '../UI/Card';
const ExpenseItem= (props) =>{

    const [title, setTitle]= useState(props.title);
    console.log('ExpenseItem evaluated by React');
    const clickHandler = () =>{
        setTitle('updated');
        console.log(title);
    }
    
    return (
        <div className = 'expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button 
                onClick={clickHandler}
            >
            Change title</button>
        </div>
    );
}

export default ExpenseItem;