import { Input } from 'antd'
import { ICategory } from '../../types'
import styles from '../Operation/Operation.module.scss'

interface OperationProps {
  category: ICategory
}

const Operation = ({category}: OperationProps) => {
  return (
    <>
      <label htmlFor='operation'>Sum:&nbsp;</label>
      <Input  
        style={{ width: '100px' }}
        id='operation'
      />
      <p>Category {category.title}</p>
      <p>Category name: {category.name}</p>
      <label htmlFor='comment'>Comment:&nbsp;</label>
      <Input  
        id='comment'
        showCount 
        maxLength={20}
        className={styles.comment}
      />
    </>
  )
}
export {Operation}