import { useState } from 'react'
import styles from '../Modal/Modal.module.scss'
import { ICategory } from '../../../types'
import { Button, Input, Space } from 'antd'
import { PlusOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons'
const { TextArea } = Input

interface ModalProps {
  category: ICategory,
}

const Modal = ({category}: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Operation</button>

      { isOpen && (
        <div className={styles.modal}>
          <div className={styles.modalBody}>
            <h2>Operation</h2>
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
            <Space className={styles.input}>
              <Button 
                onClick={() => {}}
                type='default' 
                shape='circle'
                icon={<CheckOutlined />} 
              />
              <Button 
                onClick={() => setIsOpen(false)}
                type='default' 
                shape='circle'
                icon={<CloseOutlined />} 
              />
            </Space>
          </div>
        </div>
      )}
    </>
  )
}
export {Modal}