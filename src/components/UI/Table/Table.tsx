import { ReactNode } from 'react'
import styles from './Table.module.scss'

interface TableProps {
  children?: ReactNode
}

const Table = ({children}: TableProps) => {
  return (
    <>
      <ul className={styles.tableHeader}>
        <li className={styles.addBtn}>Add sum</li>
        <li>Category</li>
        <li className={styles.total}>Total</li>
      </ul>

      <ul className={styles.tableBody}>

        {children}

      </ul>
    </>
  )
}
export default Table