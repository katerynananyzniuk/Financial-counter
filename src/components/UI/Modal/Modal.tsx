import { useState } from 'react'
import styles from '../Modal/Modal.module.scss'
import { Button, Space } from 'antd'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'

interface ModalProps {
  title: string,
  children: React.ReactNode
}

const Modal = ({title, children}: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>{title}</button>

      { isOpen && (
        <div className={styles.modal}>
          <div className={styles.modalBody}>
            <h2>{title}</h2>

            {children}

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