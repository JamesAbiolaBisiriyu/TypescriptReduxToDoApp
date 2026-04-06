import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface ExpenseState {
  balance: number;
  expense: number;
  income: number;
  expenseHistory: {
    expenseName: string;
    amount: number;
  }[]
  };

  export interface IExpense {
  expenseName: string;
  amount: number | string;
  }

  const initialState: ExpenseState = {
    balance: 0,
    expense: 0,
    income: 0,
    expenseHistory: [],
  };

  export const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {
      addExpenseToHistory: (state, action: PayloadAction<IExpense>) => {
        const amount = typeof action.payload.amount === "number"
          ? action.payload.amount
          : parseFloat(action.payload.amount);
        state.expenseHistory.push({
          expenseName: action.payload.expenseName,
          amount
        });
      },
      calculateBalance: (state) => {
        state.balance = state.expenseHistory.reduce((acc, ex) => 
          acc + ex.amount, 0)
      },
      calculateIncome: (state) => {
        state.income=state.expenseHistory.reduce((acc, ex)=> {
          if (ex.amount > 0) {
            return Math.abs ( acc + ex.amount)
          }
          return acc
        }, 0)
      },
      calculateExpense: (state) => {
        state.expense=state.expenseHistory.reduce((acc, ex)=> {
          if (ex.amount < 0) {
            return Math.abs ( acc + ex.amount)
          }
          return 0
        }, 0)
      },
    },
  })


  export const { addExpenseToHistory, calculateBalance, calculateIncome, calculateExpense } = expenseSlice.actions;
  export default expenseSlice.reducer;