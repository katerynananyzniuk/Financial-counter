import styles from '../RapidOperation/RapidOperation.module.scss'
import {Button, Input, Space} from 'antd'
import {CheckOutlined, CloseOutlined, InfoOutlined} from '@ant-design/icons'
import {useState} from 'react'
import {Modal} from '../../UI/Modal/Modal'
import {Operation} from '../Operation'
import {ICategory} from '../../../types'

interface RapidOperationProps {
  error: string,
  payload: string,
  setPayload: Function,
  comment: string,
  setComment: Function,
  onSubmit: Function,
  onClose: Function,
  category: ICategory
}

const RapidOperation = ({error, payload, setPayload, comment, setComment, onSubmit, onClose, category}: RapidOperationProps) => {
  const [modalOpen, setModalOpen] = useState(false)

  function handleSubmit(e: any) {
    e.preventDefault()
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className={styles.form}
    >
      <Space>

        <Input
          value={payload} 
          onChange={(e) => setPayload(e.target.value)}
          style={{ width: '100px' }}
        />

        <Button 
          onClick={() => setModalOpen(!modalOpen)}
          type='default' 
          shape='circle'
          icon={<InfoOutlined />} 
        />
        <Button 
          onClick={() => onSubmit()}
          type='default' 
          shape='circle'
          icon={<CheckOutlined />} 
        />
        <Button 
          onClick={() => onClose()}
          type='default' 
          shape='circle'
          icon={<CloseOutlined />} 
        />

        { error
          ? <p className={styles.error}>{error}</p>
          : null
        }

        { modalOpen
            ? (<Modal 
                title='Operation' 
                onSubmit={() => onSubmit()} 
                onClose={() => onClose()}
              >
                <Operation 
                  category={category} 
                  error={error}
                  payload={payload}
                  setPayload={setPayload}
                  comment={comment}
                  setComment={setComment}
                />
              </Modal>)
            : null
        }
        
      </Space>
    </form>
  )
}
export {RapidOperation}