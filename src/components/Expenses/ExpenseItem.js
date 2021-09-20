import React from "react";

import ExpenseDate from "./ExpenseDate";

import './ExpenseItem.css';
//import Card from '../UI/Card';
const ExpenseItem= (props) =>{

    // const [title, setTitle]= useState(props.title);
    //  const clickHandler = () =>{
    //     setTitle('updated');
    //     console.log(title);
    // }
    
    return (
        <li>
            <div className = 'expense-item'>
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
                {/* <div className="new-expense__actions">
                    <button onClick={clickHandler}>
                        Change title
                    </button>
                </div>
                <div className="expense_delete">
                    <button >
                        Delete Expense
                    </button>
                </div> */}
            </div>
        </li>
    );
}

export default ExpenseItem;