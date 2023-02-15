import styles from './Modal.module.scss'
import {Button, Space} from 'antd'
import {CheckOutlined, CloseOutlined} from '@ant-design/icons'

interface ModalProps {
  title: string,
  children: React.ReactNode,
  onSubmit: Function,
  onClose: Function
}

const Modal = ({title, children, onSubmit, onClose}: ModalProps) => {
  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modalBody}>
          <h2 className={styles.title}>{title}</h2>
          
          <div className={styles.form}>

            {children}
            
          </div>

          <Space className={styles.btns}>
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
          </Space>
        </div>
      </div>
    </>
  )
}
export {Modal}