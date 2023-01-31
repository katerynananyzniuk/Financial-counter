import { ICategory, IOperation } from '../../../types'
import styles from './TotalOperations.module.scss'
import {useState} from 'react'
import {Modal} from '../../UI/Modal/Modal'

interface TotalOperationsProps {
  category: ICategory,
  operations: IOperation[]
}

function checkFormat(sum: number) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'Eur',
    minimumFractionDigits: 0
  });
  return formatter.format(sum)
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
      <button 
        className={styles.total}
        onClick={() => handleClick()}
      >
        {checkFormat(category.total)}
      </button>

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