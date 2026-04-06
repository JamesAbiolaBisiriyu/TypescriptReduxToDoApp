import { Container } from "react-bootstrap"
import Balance from "./Components/Balance"
import IncomeAndExpense from "./Components/IncomeAndExpense"
import TransactionList from "./Components/TransactionList"
import TransactionForm from "./Components/TransactionForm"
import ExpenseHistory from "./Components/ExpenseHistory"


function App() {

  return (
    <Container className="d-flex flex-column align-items-center mt-5 card shadow rounded" 
      style={{maxWidth:"500px"}}>
     <Balance />
     <IncomeAndExpense />
     <ExpenseHistory />
     <TransactionList />
     <TransactionForm />
    </Container>
  )
}

export default App
