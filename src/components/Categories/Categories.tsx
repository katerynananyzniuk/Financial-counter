import {useState} from 'react'
import {Category} from '../Category/Category'
import styles from '../Categories/Categories.module.scss'
import {ICategory} from '../../types'

const initialValue = [
  { id: 1, name: 'Home', title: 'H', total: 0 },
  { id: 2, name: 'Food', title: 'F', total: 0 },
  { id: 3, name: 'Goods', title: 'G', total: 0 },
]

function Categories() {
  const [categories, setCategories] = useState<ICategory[]>(initialValue) // {id, name, title}

  function onChangeTotal(categoryId: number, payload: number) {
    const category = categories.find(item => item.id === categoryId)
    if (category) {
      const changedCategory: ICategory = Object.assign(category)
      changedCategory.total += +payload
      console.log('changedCategory', changedCategory)
      
      setCategories([
        changedCategory,
        ...categories.filter(item => item.id !== categoryId),
      ])
    }
  }

  return (
    <ul className={styles.categoriesList}>
      {categories.sort((a, b) => a.id - b.id).map(item => {
        return (
          <Category 
            key={item.id} 
            category={item} 
            addSum={onChangeTotal}
          />
        )
      })}
    </ul>
  )
}

export {Categories}