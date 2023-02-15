import {useBudget} from 'common/components/Budget/BudgetContext'
import styles from './Footer.module.scss'

const Footer = () => {
  const budget = useBudget()

  return (
    <footer className={styles.footer}>
      Assistant to calculate {budget.activeParameter.length ? budget.activeParameter : 'finance'} for a monthly period
    </footer>
  )
}
export {Footer}