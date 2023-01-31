import {ICategory} from '../../types'
import {useState, useEffect} from 'react'
import {checkFormat} from '../../utils'
import styles from './TotalSum.module.scss'

interface TotalSumProps {
  categories: ICategory[]
}

function TotalSum({categories}: TotalSumProps) {
  const [totalSum, setTotalSum] = useState(0)
  
  function getTotalSum(categories: ICategory[]) {
    const allCategories = categories.concat()
    const total = allCategories.reduce((acc, item) => { return item.total + acc}, 0)
    setTotalSum(total)
  }
  
  useEffect(() => {
    getTotalSum(categories)
  }, [categories])

  return (
    <h3 className={styles.totalSum}>Total sum:&nbsp;
      <span className={styles.sum}>{checkFormat(totalSum)}</span>
    </h3>
  )
}

export {TotalSum}