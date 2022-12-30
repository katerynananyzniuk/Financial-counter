import { useState } from 'react'
import { Button, Input, Space } from 'antd'
import { PlusOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons'
import styles from '../Category/Category.module.scss'
import {ICategory} from '../../types'
import {Modal} from '../UI/Modal/Modal'
import {Operation} from '../Operation/Operation'

interface CategoryProps {
  category: ICategory,
  addSum: Function,
}

function Category({category, addSum}: CategoryProps) {
  // const [togglePayload, setTogglePayload] = useState(false)
  const [onPayload, setOnPayload] = useState(false)
  const [payload, setPayload] = useState('')
  const [error, setError] = useState('')

  // function handleTogglePayload() {
  //   setTogglePayload(prev => !prev)
  // }

  function handleOnPayload() {
    setOnPayload(prev => !prev)
  }

  function addPayload() {
    setOnPayload(true)
    if (payload.trim()) {
      if (+payload) {
        setError('')
        addSum(category.id, payload)
        setPayload('')
        setOnPayload(prev => !prev)
        // return setTogglePayload(prev => !prev)
      }
      else {
        setError('Should contain only numbers or number with "."')
        setPayload('')
        setOnPayload(true)
        // setTogglePayload(false)
      }
    }
    else {
      setError('')
      setOnPayload(false)
    }
    // setTogglePayload(prev => !prev)
  }

  function removePayload() {
    setError('')
    setPayload('')
    setOnPayload(false)
    // setTogglePayload(prev => !prev)
  }

  return (
    <div className={styles.categories}>
      <Space>
        <p>{category.total}</p>
        <h3>{`Category ${category.title} | ${category.name}`}</h3>
        
        <Button 
          // onMouseOver={() => handleTogglePayload()}
          onClick={() => handleOnPayload()}
          type='default' 
          shape='circle'
          icon={<PlusOutlined />} 
        />

        <Modal 
          title='Operation' 
          onSubmit={addPayload} 
          onQuit={removePayload}
          isOpen={onPayload}
        >
          <Operation 
            category={category} 
            error={error}
            payload={payload}
            setPayload={setPayload}
          />
        </Modal>

        {/* {
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
        } */}
      </Space>
    </div>
  )
}

export {Category}