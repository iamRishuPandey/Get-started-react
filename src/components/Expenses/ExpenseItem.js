import React, {useState} from 'react';
import './Expenseitem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate'
import ExpenseDetail from './ExpenseDetail';
const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    const [amount, setAmount] = useState(props.amount);
    
    const clickHandler = () => {
        setTitle('updated!');
        
    }

    const handlerClick = () => {
        setAmount('$100');
        
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date = {props.date} />
            <ExpenseDetail title = {title} locationOfExpenditure = {props.locationOfExpenditure} amount = {amount} />
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={handlerClick}>Change ExpenseAmount</button>
        </Card>
    );
}

export default ExpenseItem;
