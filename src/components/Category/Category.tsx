import { useState } from 'react'
import { Button, Input, Space } from 'antd'
import { PlusOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons'
import styles from '../Category/Category.module.scss'
import {ICategory} from '../../types'

interface CategoryProps {
  category: ICategory,
  addSum: Function,
}

function Category({category, addSum}: CategoryProps) {
  const [togglePayload, setTogglePayload] = useState(false)
  const [payload, setPayload] = useState('')
  const [error, setError] = useState('')

  function handleTogglePayload() {
    setTogglePayload(prev => !prev)
  }

  function addPayload() {
    if(payload.trim()) {
      if (+payload) {
        setError('')
        addSum(category.id, payload)
        setPayload('')
        return setTogglePayload(prev => !prev)
      }
      else {
        setError('Should contain only numbers or number with "."')
        setPayload('')
        setTogglePayload(false)
      }
    }
    setTogglePayload(prev => !prev)
  }

  function removePayload() {
    setError('')
    setPayload('')
    setTogglePayload(prev => !prev)
  }

  return (
    <div className={styles.categories}>
      <Space>
        <p>{category.total}</p>
        <h3>{`Category ${category.title} | ${category.name}`}</h3>
        <Button 
          onClick={() => handleTogglePayload()}
          type='default' 
          shape='circle'
          icon={<PlusOutlined />} 
        />
        {
          togglePayload
            ? (
              <Space className={styles.input}>
                <Input 
                  value={payload} 
                  onChange={(event) => setPayload(event.target.value)} 
                  style={{ width: '100px' }}
                />
                { error
                  ? <p className={styles.error}>{error}</p>
                  : null
                }
                <Button 
                  onClick={() => addPayload()}
                  type='default' 
                  shape='circle'
                  icon={<CheckOutlined />} 
                />
                <Button 
                  onClick={() => removePayload()}
                  type='default' 
                  shape='circle'
                  icon={<CloseOutlined />} 
                />
              </Space>
            )
          : null
        }
      </Space>
    </div>
  )
}

export {Category}