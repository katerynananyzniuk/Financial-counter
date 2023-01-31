import {ICategory} from '../../types'
import TableItem from '../UI/Table/TableItem/TableItem'
import {Category} from './Category/Category'

interface CategoriesListProps{
  categories: ICategory[],
  onChangeCategoryTotal: Function
}

const CategoriesList = ({categories, onChangeCategoryTotal}: CategoriesListProps) => {
  return (
    <>
      { categories
        .sort((a, b) => a.id - b.id)
        .map(item => {
          return (
            <TableItem key={item.id}>
              
              <Category 
                category={item} 
                onChangeTotal={onChangeCategoryTotal}
              />

            </TableItem>
          )
      })}
    </>
  )
}
export {CategoriesList}