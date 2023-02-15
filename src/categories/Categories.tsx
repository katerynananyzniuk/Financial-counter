import {useState} from 'react'
import {ICategory} from '../common/types'
import {CategoryCreation} from './components/CategoryCreation/CategoryCreation'
import {CategoriesList} from './components/CategoriesList/CategoriesList'
import {TotalSum} from './components/TotalSum/TotalSum'
import {categories as initialValue} from './core/constants'


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

      <TotalSum categories={categories} />
    </>
  )
}

export {Categories}