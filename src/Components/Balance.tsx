// import React from 'react'

import { useAppSelector } from "../hooks/hooks"
import type { RootState } from "../redux/store"


export default function Balance() {
  const balance = useAppSelector((state: RootState) => state.expense.balance) // Replace with actual balance logic
  return <div className="fw-bold">
    Your Balance: <span className="text-muted">$ {balance}</span>
    </div>
}



