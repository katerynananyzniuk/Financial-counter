import {Input} from 'antd'

interface NewCategoryProps {
  newCategoryName: string,
  setNewCategoryName: Function
}

const NewCategory = ({newCategoryName, setNewCategoryName}: NewCategoryProps) => {
  return (
    <>
      <div>Do you wish to add a new cathegory?</div>
      
      <label htmlFor='newCategory'>Category name:&nbsp;</label>
      <Input  
        id='newCategory'
        style={{ width: '200px' }}
        value={newCategoryName}
        onChange={(event) => setNewCategoryName(event.target.value)}
      />
    </>
  )
}
export {NewCategory}