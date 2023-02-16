import {useContext} from 'react'
import {BudgetContext} from 'common/components/Budget/BudgetContext'

export const useBudget = () => {
  return useContext(BudgetContext)
}