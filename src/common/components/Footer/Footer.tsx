import {useBudget} from 'common/components/Budget/hooks'
import styles from './Footer.module.scss'

const Footer = () => {
  const budget = useBudget()

  return (
    <footer className={styles.footer}>
      <div className={styles.title}>Assistant to calculate {budget.active.length ? budget.active : 'finance'} for a monthly period</div>
    </footer>
  )
}
export {Footer}