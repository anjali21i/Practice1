import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem  from "./ExpenseItem";
import './Expenses.css';
import { useState } from "react";
//import Card from "../UI/Card";

const Expenses = (props) => {
    const [filterYear, setFilteredYear] =useState('2020');
    
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense =>{
        return expense.date.getFullYear().toString()=== filterYear;
    });
    return(
        <div>
            <div className="expenses">
                <ExpensesFilter 
                    selected = {filterYear} 
                    onChangeFilter = {filterChangeHandler}
                />

                {filteredExpenses.length ===0 ? (
                    <div className="foundEle">
                        <p>No Expense Found.</p>
                    </div>
                ) : (
                    filteredExpenses.map((expense) => (
                    <ExpenseItem 
                        key= {expense.id}
                        title= {expense.title}
                        amount= {expense.amount}
                        date= {expense.date}   
                    />
                    ))
                )}   
                   
               {
                /*  <ExpenseItem 
                    title={props.items[0].title} 
                    amount= {props.items[0].amount}
                    date= {props.items[0].date}
                ></ExpenseItem>
                <ExpenseItem 
                    title={props.items[1].title} 
                    amount= {props.items[1].amount}
                    date= {props.items[1].date}
                ></ExpenseItem>
                <ExpenseItem 
                    title={props.items[2].title} 
                    amount= {props.items[2].amount}
                    date= {props.items[2].date}
                ></ExpenseItem> 
                */
               }
            </div>
        </div>
    );
}

export default Expenses;

