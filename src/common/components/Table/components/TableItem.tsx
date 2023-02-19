import {ICategory} from 'common/types'
import styles from './TableItem.module.scss'

interface TableItemProps {
  item: ICategory
}

const TableItem = ({item}: TableItemProps) => {
  return (
    // <div className={styles.itemContainer}>
    //   <div className={styles.item}>
        
    //     {children}

    //   </div>
    // </div>
    <td className={styles.bodyCell}>{item.name}</td>
  )
}
export {TableItem}