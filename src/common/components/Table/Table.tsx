import {ICategory, IColumns} from 'common/types'
// import {categories} from 'categories/core/constants'
import styles from './Table.module.scss'
import {TableItem} from './components/TableItem'

interface TableProps {
  columns: IColumns[],
  dataSource: ICategory[]
}

const Table = ({columns, dataSource}: TableProps) => {
  return (    
    <table className={styles.table}>
      <thead>
        <tr className={styles.tableHeader}>
          { columns.map(item => {
            return (
              <th className={styles.headerCell}>{item.name}</th>
              )
            })}
        </tr>
      </thead>
      <tbody>
        <tr className={styles.tableBody}>
          { dataSource.map(item => {
            return (
              <TableItem item={item} key={item.id}/>
            )
          })}
        </tr>
      </tbody>
    </table>
  )
}
export {Table}