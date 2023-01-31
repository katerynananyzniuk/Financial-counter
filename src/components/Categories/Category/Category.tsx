import {useState} from 'react'
import {Button, Tooltip, Space} from 'antd'
import {PlusOutlined, RedoOutlined} from '@ant-design/icons'
import styles from '../Category/Category.module.scss'
import {ICategory} from '../../../types'
import {RapidOperation} from '../../Operation/RapidOperation/RapidOperation'
import {Modal} from '../../UI/Modal/Modal'
import {TotalRemove} from '../../TotalRemove/TotalRemove'
import {TotalOperations} from '../../Operation/TotalOperations/TotalOperations'
import {IOperation} from '../../../types'

interface CategoryProps {
  category: ICategory,
  onChangeTotal: Function
}

function Category({category, onChangeTotal}: CategoryProps) {
  const [togglePayload, setTogglePayload] = useState(false)
  const [payload, setPayload] = useState('')
  const [comment, setComment] = useState('')
  const [operations, setOperations] = useState<IOperation[]>([])
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
        const allOperations = operations.concat()
        const newOperation: IOperation = { id: allOperations.length+1, payload: +payload, comment: comment}
        setOperations([newOperation, ...allOperations])
        setComment('')
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
    setOperations([])
    setModalOpen(false)
  }

  return (
    <>
      <Space className={styles.addBtn}>

        { togglePayload
          ? (<RapidOperation
              error={error}
              payload={payload}
              setPayload={setPayload}
              comment={comment}
              setComment={setComment}
              onSubmit={addPayload} 
              onClose={removePayload}
              category={category}
            />)
          : (<Tooltip title='add sum'>
              <Button
                onClick={() => handlePayload()}
                type='default' 
                shape='circle'
                icon={<PlusOutlined />} 
              />
            </Tooltip>)
        }

        { modalOpen
          ? (<Modal 
              title='Remove Total' 
              onSubmit={() => removeTotal()} 
              onClose={() => setModalOpen(false)}
            >
              <TotalRemove total={category.total}/>
            </Modal>)
          : null
        }

      </Space>

      <h3 className={styles.categoryTitle}>Category {category.title}
        <span>&nbsp;|&nbsp;</span>
        <span className={styles.categoryName}>{category.name}</span>
      </h3>
     
      <TotalOperations category={category} operations={operations}/>

      <Tooltip title='remove total'>
        <Button 
          className={styles.removeBtn}
          onClick={() => setModalOpen(!modalOpen)}
          type='default' 
          shape='circle'
          icon={<RedoOutlined />}
        />
      </Tooltip>
    </>      
  )
}

export {Category}