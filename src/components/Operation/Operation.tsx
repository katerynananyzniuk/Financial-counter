import { Input } from 'antd'
import { ICategory } from '../../types'
import styles from '../Operation/Operation.module.scss'

interface OperationProps {
  category: ICategory,
  error: string,
  payload: string,
  setPayload: Function
}

const Operation = ({category, error, payload, setPayload}: OperationProps) => {
  return (
    <div className={styles.body}>
      <label htmlFor='operation'>Sum:&nbsp;</label>
      <Input  
        id='operation'
        style={{ width: '100px' }}
        value={payload}
        onChange={(event) => setPayload(event.target.value)}
      />
      { error
        ? <p className={styles.error}>{error}</p>
        : null
      }

      <p>Category {category.title}</p>
      <p>Category name: {category.name}</p>
      
      <label htmlFor='comment'>Comment:&nbsp;</label>
      <Input  
        id='comment'
        showCount 
        maxLength={20}
        className={styles.comment}
      />
    </div>
  )
}
export {Operation}