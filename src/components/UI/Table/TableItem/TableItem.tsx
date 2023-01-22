import { ReactNode } from 'react'
import styles from './TableItem.module.scss'

interface TableItemProps {
  children?: ReactNode;
}

const TableItem = ({children}: TableItemProps) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.item}>
        
        {children}

      </div>
    </div>
  )
}
export default TableItem