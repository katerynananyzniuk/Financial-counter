import styles from '../RapidOperation/RapidOperation.module.scss'
import {Button, Input, Space} from 'antd'
import {CheckOutlined, CloseOutlined, InfoOutlined} from '@ant-design/icons'
import {useState, useRef} from 'react'
import {Modal} from '../UI/Modal/Modal'
import {Operation} from '../Operation/Operation'
import {ICategory} from '../../types'
import { MutableRefObject } from "react"

interface RapidOperationProps {
  error: string,
  payload: string,
  setPayload: Function,
  onSubmit: Function,
  onClose: Function,
  category: ICategory
}

const RapidOperation = ({error, payload, setPayload, onSubmit, onClose, category}: RapidOperationProps) => {
  const [modalOpen, setModalOpen] = useState(false)
  // const inputRef  = useRef<HTMLInputElement | null>(null)

  // function handleFocus() {
  //   const {current} = inputRef
  //   return current ? current.focus() : null
  // }

  // function handleBlur() {
  //   const {current} = inputRef
  //   return current ? current.blur() : null
  // }

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
          // ref={inputRef}
          value={payload} 
          onChange={(e) => setPayload(e.target.value)} 
          // onMouseOver={() => handleFocus()} 
          // onMouseOut={() => handleBlur()}
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

        {
          modalOpen
            ? (
              <Modal 
                title='Operation' 
                onSubmit={() => onSubmit()} 
                onClose={() => onClose()}
                >
                <Operation 
                  category={category} 
                  error={error}
                  payload={payload}
                  setPayload={setPayload}
                />
              </Modal>
            )
            : null
        }
        
        
      </Space>
    </form>
  )
}
export {RapidOperation}