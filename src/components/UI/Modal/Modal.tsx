import { useState } from 'react'
import styles from '../Modal/Modal.module.scss'
import { Button, Space } from 'antd'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
import { PlusOutlined } from '@ant-design/icons'

interface ModalProps {
  title: string,
  children: React.ReactNode,
  onSubmit: Function,
  onQuit: Function
}

const Modal = ({title, children, onSubmit, onQuit}: ModalProps) => {
  return (
    <>
      { true && (
        <div className={styles.modal}>
          <div className={styles.modalBody}>
            <h2>{title}</h2>

            {children}

            <Space className={styles.input}>
              <Button 
                onClick={() => onSubmit()}
                type='default' 
                shape='circle'
                icon={<CheckOutlined />} 
              />
              <Button 
                onClick={() => onQuit()}
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