import {ICategory} from 'common/types'
import {TableItem} from 'common/components/TableItem'
import {Category} from 'category/Category'

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