import React, {useState} from 'react'
import {budgetParameters} from 'common/core/constants'
import {BudgetContext} from 'common/components/Budget/BudgetContext'

export const BudgetProvider = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState('')

  const expenses = () => setActive(budgetParameters[0])
  const income = () => setActive(budgetParameters[1])

  return (
    <BudgetContext.Provider value={{ active, expenses, income }}>
      { children }
    </BudgetContext.Provider>
  )
}