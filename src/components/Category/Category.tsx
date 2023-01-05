import { useState, useRef } from 'react'
import { Button, Space } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import styles from '../Category/Category.module.scss'
import {ICategory} from '../../types'
import {RapidOperation} from '../RapidOperation/RapidOperation'

interface CategoryProps {
  category: ICategory,
  addSum: Function,
}

function Category({category, addSum}: CategoryProps) {
  const [togglePayload, setTogglePayload] = useState(false)
  const [payload, setPayload] = useState('')
  const [error, setError] = useState('')
  const inputRef = useRef<HTMLElement | null>(null)

  function handlePayload() {
    setTogglePayload(prev => !prev)
  }

  function addPayload() {
    if (payload.trim()) {
      if (+payload) {
        setError('')
        addSum(category.id, payload)
        setPayload('')
        return setTogglePayload(prev => !prev)
      }
      else {
        //TODO: improve the error validation
        setError('Should contain only numbers or number in format "00.00"')
        setPayload('')
        setTogglePayload(false)
      }
    }
    else {
      setError('')
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
        
        <Space>
          <Button 
            onClick={() => handlePayload()}
            type='default' 
            shape='circle'
            icon={<PlusOutlined />} 
          />

          {
            togglePayload
              ? (
                <RapidOperation
                  error={error}
                  payload={payload}
                  setPayload={setPayload}
                  onSubmit={addPayload} 
                  onQuit={removePayload}
                  inputRef={inputRef}
                />
              )
              : null
          }
        </Space>
      </Space>
    </div>
  )
}

export {Category}