import React, {useState, useContext} from 'react'
import {budgetParameters} from 'common/core/constants'

interface IBudgetContext {
  activeParameter: string
  expences: () => void
  income: () => void
}

const BudgetContext = React.createContext<IBudgetContext>({
  activeParameter: '',
  expences: () => {},
  income: () => {}
})

export const useBudget = () => {
  return useContext(BudgetContext)
}

export const BudgetProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeParameter, setActiveParameter] = useState('')

  const expences = () => setActiveParameter(budgetParameters[0])
  const income = () => setActiveParameter(budgetParameters[1])

  return (
    <BudgetContext.Provider value={{ activeParameter, expences, income }}>
      { children }
    </BudgetContext.Provider>
  )
}