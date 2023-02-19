import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = () => {
    const expenses = [
        {
          id: 'e1',
          title: 'Toilet Paper',
          amount: 94.12,
          date: new Date(2020, 7, 14),
          locationOfExpenditure: 'usa',
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12), locationOfExpenditure: 'france', },
        {
          id: 'e3',
          title: 'Car Insurance',
          amount: 294.67,
          date: new Date(2021, 2, 28),
          locationOfExpenditure: 'japan',
        },
        {
          id: 'e4',
          title: 'New Desk (Wooden)',
          amount: 450,
          date: new Date(2021, 5, 12),
          locationOfExpenditure: 'London',
        },
        {
          id: 'e5',
          title: 'Life Insurance',
          amount: 350,
          date: new Date(2022, 5, 15),
          locationOfExpenditure: 'china',
        },
      ];
    return (
        <Card className="expenses">
            {expenses.map((expense)=>{
                return (
                    <div key={expense.id}>
                    <ExpenseItem title={expense.title} 
                  amount={expense.amount}
                  date={expense.date}
                  locationOfExpenditure={expense.locationOfExpenditure}>
                </ExpenseItem>
                </div>
                )
            })}
           
        </Card>
    );
}

export default Expenses;