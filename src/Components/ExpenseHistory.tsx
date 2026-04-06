import { useAppSelector } from "../hooks/hooks"



const ExpenseHistory = () => {

  const expenses = useAppSelector((state)=> state.expense.expenseHistory) // Replace with actual expenses logic
  return (
    <div style={{width: "100%"}}>
      {expenses.map((expense, i) => (
        <div key={i} className={
          expense.amount < 0 ?
          "shadow-sm p-1 my-2 d-flex bg-danger rounded tetx-white" 
          : "shadow-sm p-1 my-2 d-flex bg-success rounded text-white"
        }>
          <div>{expense.expenseName}</div>
          <div>{expense.amount}</div>
        </div>
      ))}
      {expenses.length === 0 && <div className="text-muted text-center">No Transactions Yet</div>}
    </div>
  )
}

export default ExpenseHistory






   
