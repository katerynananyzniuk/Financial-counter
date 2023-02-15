import {useState} from 'react'
import {Button, Tooltip} from 'antd'
import {PlusOutlined} from '@ant-design/icons'
import {Modal} from 'common/components/Modal/Modal'
import {NewCategory} from 'categories/components/CategoryCreation/components/NewCategory'

interface CategoryCreationProps{
  onCreate: Function
}

const CategoryCreation = ({onCreate}: CategoryCreationProps) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [newCategoryName, setNewCategoryName] = useState('')

  function modalSubmit() {
    if (newCategoryName.trim()) {
      onCreate(newCategoryName)
      setModalOpen(false)
      setNewCategoryName('')
    }
  }

  return (
    <>
      <Tooltip title='add category'>
        <Button 
          onClick={() => setModalOpen(true)}
          type='default' 
          shape='circle'
          icon={<PlusOutlined />}
          style={{margin: '0 auto'}}
        />
      </Tooltip>

      {
        modalOpen
          ? (<Modal 
              title='Add Category'
              onSubmit={() => modalSubmit()} 
              onClose={() => setModalOpen(false)}
            >

              <NewCategory 
                newCategoryName={newCategoryName} 
                setNewCategoryName={setNewCategoryName}
              />
              
            </Modal>)
          : null
        }
    </>
  )
}
export {CategoryCreation}