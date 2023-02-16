import React from 'react'

interface IBudgetContext {
  active: string
  expenses: () => void
  income: () => void
}

export const BudgetContext = React.createContext<IBudgetContext>({
  active: '',
  expenses: () => {},
  income: () => {}
})