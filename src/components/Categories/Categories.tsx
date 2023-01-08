import {useState} from 'react'
import {Category} from '../Category/Category'
import styles from '../Categories/Categories.module.scss'
import {ICategory} from '../../types'
import {Button, Tooltip} from 'antd'
import {PlusOutlined} from '@ant-design/icons'
import {Modal} from '../UI/Modal/Modal'
import {NewCategory} from '../NewCategory/NewCategory'

const initialValue = [
  { id: 1, name: 'home', title: 'H', total: 0 },
  { id: 2, name: 'food', title: 'F', total: 0 },
  { id: 3, name: 'goods', title: 'G', total: 0 },
]

function Categories() {
  const [categories, setCategories] = useState<ICategory[]>(initialValue)
  const [modalOpen, setModalOpen] = useState(false)
  const [newCategoryName, setNewCategoryName] = useState('')

  function onChangeCategoryTotal(categoryId: number, payload: number=0) {
    const category = categories.find(item => item.id === categoryId)
    if (category) {
      const changedCategory: ICategory = Object.assign(category)

      if (payload) {
        changedCategory.total += +payload
      }
      else {
        changedCategory.total = 0
      }
      console.log('changedCategory', changedCategory)
      
      setCategories([
        changedCategory,
        ...categories.filter(item => item.id !== categoryId),
      ])
    }
  }

  function addCategory() {
    if (newCategoryName) {
      const allCategories = categories.concat()

      let lastId = 0
      for (let item of allCategories) {
        if( item.id > lastId ) lastId = item.id
      }

      const newCategory = { 
        id: lastId+1, 
        name: newCategoryName, 
        title: newCategoryName.charAt(0).toUpperCase(), 
        total: 0 
      }

      setCategories([
        newCategory,
        ...allCategories
      ])
      setModalOpen(false)
      setNewCategoryName('')
    }
  }

  return (
    <>
    <ul className={styles.tableHeader}>
      <li className={styles.total}>Total</li>
      <li className={styles.removeBtn}>Remove total</li>
      <li>Category</li>
      <li className={styles.addBtn}>Add sum</li>
    </ul>
    <ul className={styles.categoriesList}>
      {categories.sort((a, b) => a.id - b.id).map(item => {
        return (
          <Category 
            key={item.id} 
            category={item} 
            onChangeTotal={onChangeCategoryTotal}
          />
        )
      })}

      <Tooltip title='add category'>
        <Button 
          onClick={() => setModalOpen(true)}
          type='default' 
          shape='circle'
          icon={<PlusOutlined />}
          className={styles.btn}
          />
      </Tooltip>

      {
        modalOpen
        ? (
          <Modal 
          title='Add Category'
          onSubmit={() => addCategory()} 
          onClose={() => setModalOpen(false)}
          >
              <NewCategory 
                newCategoryName={newCategoryName} 
                setNewCategoryName={setNewCategoryName}
                />
            </Modal>
          )
          : null
        }
    </ul>
        </>
  )
}

export {Categories}