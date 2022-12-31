import styles from '../RapidOperation/RapidOperation.module.scss'
import { Button, Input, Space } from 'antd'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'

interface RapidOperationProps {
  error: string,
  payload: string,
  setPayload: Function,
  onSubmit: Function,
  onQuit: Function
}

const RapidOperation = ({error, payload, setPayload, onSubmit, onQuit}: RapidOperationProps) => {
  return (
    <Space>
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
  )
}
export {RapidOperation}