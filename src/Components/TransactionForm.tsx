
import { useState } from 'react'
import { useAppDispatch } from '../hooks/hooks'
import { addExpenseToHistory, calculateBalance, calculateExpense, calculateIncome, type IExpense } from '../redux/features/expenseSlice'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const TransactionForm = () => {
  const dispatch = useAppDispatch()
  const [expense, setExpense] = useState<IExpense>({
    expenseName: "",
    amount: 0,
  })
  const onChange = <K extends keyof IExpense>(key: K, value: IExpense[K]) => {
    if (key === 'amount') {
      setExpense({ ...expense, amount: value === '' ? '' : Number(value) });
    } else {
      setExpense({ ...expense, [key]: value });
    }
  }
  return (
    <div className='mt-3'>
      <h3 className='border-bottom border-2'> Add New Transaction  </h3>
        
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Text</Form.Label>
        <Form.Control onChange={(e)=>
        onChange(e.target.name as keyof IExpense, e.target.value)} name='expenseName'
         type="email"
          placeholder= "Enter Text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Amount</Form.Label>
        <Form.Control 
          onChange={(e) => onChange('amount', e.target.value)}
          name='amount'
          type="number"
          placeholder="Enter Amount" 
        />
      </Form.Group>
      <Button onClick={() => {
        const amount = typeof expense.amount === 'string' ? parseFloat(expense.amount) : expense.amount;
        if (!isNaN(amount) && amount !== 0 && expense.expenseName.trim() !== "") {
          dispatch(addExpenseToHistory({ ...expense, amount }));
          dispatch(calculateBalance());
          dispatch(calculateIncome());
          dispatch(calculateExpense());
        }
      }}>  Add Transaction </Button>
      
    
    </div>
  )
}

export default TransactionForm