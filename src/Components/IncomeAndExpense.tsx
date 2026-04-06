import { Stack } from "react-bootstrap"
import { useAppSelector } from "../hooks/hooks"
import type { RootState } from "../redux/store"
const IncomeAndExpense = () => {


const income = useAppSelector((state: RootState) => state.expense.income)
const expense = useAppSelector((state: RootState) => state.expense.expense)
  return (
    <div className="card shadow px-1 py-3 mt-3" style={{width: "100%"}}>
      <Stack direction="horizontal">
        <div className="mx-auto d-flex flex-column">
          <div className="fw-bold">Expense</div>
          <span className="text-danger">$ {income}</span>
        </div>
        <div className="mx-auto d-flex flex-column">
          <div className="fw-bold">Income</div>
          <span className="text-danger">$ {expense}</span>
        </div>
      </Stack>
    </div>
  )
}

export default IncomeAndExpense