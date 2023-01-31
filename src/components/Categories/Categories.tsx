import {useState} from 'react'
import {ICategory} from '../../types'
import {CategoryCreation} from './CategoryCreation'
import {CategoriesList} from './CategoriesList'
import {TotalSum} from '../TotalSum/TotalSum'

const initialValue = [
  { id: 1, name: 'home', title: 'H', total: 0 },
  { id: 2, name: 'food', title: 'F', total: 0 },
  { id: 3, name: 'goods', title: 'G', total: 0 },
]

function Categories() {
  const [categories, setCategories] = useState<ICategory[]>(initialValue)

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

  function addCategory(newCategoryName: string) {
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
  }

  return (
    <>
      <CategoriesList 
        categories={categories} 
        onChangeCategoryTotal={onChangeCategoryTotal}
      />
      
      <CategoryCreation onCreate={addCategory} />

      <TotalSum categories={categories}/>
    </>
  )
}

export {Categories}