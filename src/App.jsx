import { useState } from 'react';
import ExpenseList from './components/ExpenseList';

function App() {

  const [expenses, setExpenses] = useState([
    {id:1, description:"Eggs", amount: 6, catergory:'Groceries'},
    {id:1, description:"Chicken", amount: 15, catergory:'Groceries'},
    {id:1, description:"Milk", amount: 3, catergory:'Groceries'},
    {id:1, description:"Bread", amount: 2, catergory:'Groceries'}
  ]);

  return (
    <>
    <ExpenseList />
    </>
  )
}

export default App;
