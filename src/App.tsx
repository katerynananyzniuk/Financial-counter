import {Categories} from 'categories'
import {AppLayout} from 'common/components/AppLayout'
import {Table} from 'common/components/Table'
import {BudgetProvider} from 'common/components/Budget/BudgetContext';

function App() {
  return (
    <BudgetProvider>
      <AppLayout>
        <Table>
          <Categories />
        </Table>
      </AppLayout>
    </BudgetProvider>
  );
}

export default App;
