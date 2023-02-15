import styles from './Header.module.scss'
import {Button} from 'antd'
import {budgetParameters} from 'common/core/constants'
import {useBudget} from 'common/components/Budget/BudgetContext'

const Header = () => {
  const budget = useBudget()

  return (
    <header className={styles.header}>
      <Button 
        onClick={() => budget.expences()}
        className={ budget.activeParameter === budgetParameters[0] ? styles.btnActive : styles.btnPassive }
      >
        { budgetParameters[0] }
      </Button>

      <h1 className={styles.title}>financial counter</h1>

      <Button 
        onClick={() => budget.income()}
        className={ budget.activeParameter === budgetParameters[1] ? styles.btnActive : styles.btnPassive }
      >
        { budgetParameters[1] }
      </Button>
    </header>
  )
}
export {Header}