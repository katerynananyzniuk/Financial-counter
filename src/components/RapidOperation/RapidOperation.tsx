import styles from '../RapidOperation/RapidOperation.module.scss'
import { Button, Input, Space } from 'antd'
import { CheckOutlined, CloseOutlined, InfoOutlined } from '@ant-design/icons'
import React, {useState, useRef} from 'react'
import {Modal} from '../UI/Modal/Modal'
import {Operation} from '../Operation/Operation'

interface RapidOperationProps {
  error: string,
  payload: string,
  setPayload: Function,
  onSubmit: Function,
  onQuit: Function,
  inputRef?: any
}

const RapidOperation = ({error, payload, setPayload, onSubmit, onQuit, inputRef}: RapidOperationProps) => {

  function handleFocus() {
    return inputRef.current ? inputRef.current.focus() : null
  }

  function handleBlur() {
    return inputRef.current ? inputRef.current.blur() : null
  }

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
          ref={inputRef}
          value={payload} 
          onChange={(e) => setPayload(e.target.value)} 
          onMouseOver={() => handleFocus()} 
          onMouseOut={() => handleBlur()}
          style={{ width: '100px' }}
        />
        <Button 
          // onClick={() => handleOnPayload()}
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
          onClick={() => onQuit()}
          type='default' 
          shape='circle'
          icon={<CloseOutlined />} 
        />

        { error
          ? <p className={styles.error}>{error}</p>
          : null
        }

        {/* <Modal 
          title='Operation' 
          onSubmit={addPayload} 
          onQuit={removePayload}
          >
          <Operation 
            category={category} 
            error={error}
            payload={payload}
            setPayload={setPayload}
          />
        </Modal> */}
        
      </Space>
    </form>
  )
}
export {RapidOperation}