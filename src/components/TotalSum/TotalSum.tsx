import {ICategory} from '../../types'
import {useState, useEffect} from 'react'
import {checkFormat} from '../../utils'
import TableItem from '../UI/Table/TableItem/TableItem'
import styles from './TotalSum.module.scss'

interface TotalSumProps {
  categories: ICategory[]
}

function TotalSum({categories}: TotalSumProps) {
  const [totalSum, setTotalSum] = useState(0)
  
  function getTotalSum() {
    const allCategories = categories.concat()
    const total = allCategories.reduce((acc, item) => { return item.total + acc}, 0)
    setTotalSum(total)
  }
  
  useEffect(() => {
    getTotalSum()
  }, [categories])

  return (
    <TableItem>
      <h3 className={styles.totalSum}>Total sum: {checkFormat(totalSum)}</h3>
    </TableItem>
  )
}

export {TotalSum}