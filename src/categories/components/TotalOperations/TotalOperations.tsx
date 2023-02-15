import {useState} from 'react'
import styles from './TotalOperations.module.scss'
import {ICategory, IOperation} from '../../../common/types'
import {Modal} from '../../../common/components/Modal/Modal'
import {checkFormat} from '../../../common/utils'
import {Button} from 'antd'

interface TotalOperationsProps {
  category: ICategory,
  operations: IOperation[]
}

function TotalOperations({category, operations}: TotalOperationsProps) {
  const [modalOpen, setModalOpen] = useState(false)
 
  function handleClick() {
    if (operations.length) {
      setModalOpen(true)
    }
  }
  return (
    <>
      <Button 
        className={styles.total}
        onClick={() => handleClick()}
      >
        {checkFormat(category.total)}
      </Button>

      {
        modalOpen
          ? (<Modal 
              title={`${category.name} operations`}
              onSubmit={() => setModalOpen(false)} 
              onClose={() => setModalOpen(false)}
            >
              <ul className={styles.operations}>
                { operations.map(item => { 
                    return (
                      <li key={item.id}>
                        { item.comment 
                          ? <div>{checkFormat(item.payload)} : {item.comment}</div>
                          : <div>{checkFormat(item.payload)}</div>
                        }
                      
                      </li>
                    )
                  })
                }
              </ul>
              
            </Modal>)
          : null
      }
    </>
  )
}

export {TotalOperations}