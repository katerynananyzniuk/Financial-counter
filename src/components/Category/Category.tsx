import {useState} from 'react'
import {Button, Tooltip, Space} from 'antd'
import {PlusOutlined, RedoOutlined} from '@ant-design/icons'
import styles from '../Category/Category.module.scss'
import {ICategory} from '../../types'
import {RapidOperation} from '../RapidOperation/RapidOperation'
import {Modal} from '../UI/Modal/Modal'
import {TotalRemove} from '../TotalRemove/TotalRemove'

interface CategoryProps {
  category: ICategory,
  onChangeTotal: Function
}

function Category({category, onChangeTotal}: CategoryProps) {
  const [togglePayload, setTogglePayload] = useState(false)
  const [payload, setPayload] = useState('')
  const [error, setError] = useState('')
  const [modalOpen, setModalOpen] = useState(false)

  function handlePayload() {
    setTogglePayload(prev => !prev)
  }

  function addPayload() {
    if (payload.trim()) {
      if (+payload) {
        setError('')
        onChangeTotal(category.id, payload)
        setPayload('')
        return setTogglePayload(prev => !prev)
      }
      else {
        //TODO: improve the error validation & numbers like 09
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

  function removeTotal() {
    onChangeTotal(category.id)
    setModalOpen(false)
  }

  return (
    <div className={styles.categories}>
      <div className={styles.category}>
        <p className={styles.total}>{category.total}</p>

        <Tooltip title='remove total'>
          <Button 
            onClick={() => setModalOpen(!modalOpen)}
            type='default' 
            shape='circle'
            icon={<RedoOutlined />}
          />
        </Tooltip>

        <h3 className={styles.categoryTitle}>{`Category ${category.title} | ${category.name}`}</h3>
        
        <Space
          className={styles.addBtn}
        >
          <Tooltip title='add sum'>
            <Button 
              onClick={() => handlePayload()}
              type='default' 
              shape='circle'
              icon={<PlusOutlined />} 
            />
          </Tooltip>

          {
            togglePayload
              ? (
                <RapidOperation
                  error={error}
                  payload={payload}
                  setPayload={setPayload}
                  onSubmit={addPayload} 
                  onQuit={removePayload}
                  category={category}
                />
              )
              : null
          }

          {
            modalOpen
              ? (
                <Modal 
                  title='Remove Total' 
                  onSubmit={() => removeTotal()} 
                  onQuit={() => setModalOpen(false)}
                >
                  <TotalRemove total={category.total}/>
                </Modal>
              )
              : null
          }

        </Space>
      </div>
    </div>
  )
}

export {Category}