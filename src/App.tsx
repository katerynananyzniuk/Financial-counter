import {BudgetProvider} from 'common/components/Budget/BudgetProvider'
import {AppLayout} from 'common/components/AppLayout'
import {Table} from 'common/components/Table/Table'
import {columns} from 'common/components/Table/core/constants'
import {categories} from 'categories/core/constants'

function App() {
  return (
    <BudgetProvider>
      <AppLayout>
        <Table columns={columns} dataSource={categories}/>
      </AppLayout>
    </BudgetProvider>
  )
}

export default App
