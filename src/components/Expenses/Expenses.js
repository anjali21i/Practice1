import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem  from "./ExpenseItem";
import './Expenses.css';
import { useState } from "react/cjs/react.development";
//import Card from "../UI/Card";

function Expenses(props){
    const [filterYear, setFilteredYear] =useState('2020');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);

    }
    return(
        <div className="expenses">
            <ExpensesFilter 
                selected = {filterYear} 
                onChangeFilter = {filterChangeHandler}/>
            <ExpenseItem 
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
        </div>
    );
}

export default Expenses;

