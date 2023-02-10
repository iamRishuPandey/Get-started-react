import './Expenseitem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate'
import ExpenseDetail from './ExpenseDetail';
const ExpenseItem = (props) => {
    const clickHandler = () => {
        console.log("clicked");
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date = {props.date} />
            <ExpenseDetail title = {props.title} locationOfExpenditure = {props.locationOfExpenditure} amount = {props.amount} />
            <button onClick={clickHandler}>Change Title</button>
            <button>Delete Expense</button>
        </Card>
    );
}

export default ExpenseItem;