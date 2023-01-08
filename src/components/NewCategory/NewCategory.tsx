import { Input } from 'antd'
import { ICategory } from '../../types'
import { useState } from 'react'
import styles from './NewCategory.module.scss'

interface NewCategoryProps {
  newCategoryName: string,
  setNewCategoryName: Function
}

const NewCategory = ({newCategoryName, setNewCategoryName}: NewCategoryProps) => {
  return (
    <div className={styles.newCategory}>
      <div>Do you wish to add a new cathegory?</div>
      <label htmlFor='newCategory'>Cathegory name:&nbsp;</label>
      <Input  
        id='newCategory'
        style={{ width: '200px' }}
        value={newCategoryName}
        onChange={(event) => setNewCategoryName(event.target.value)}
      />
    </div>
  )
}
export {NewCategory}