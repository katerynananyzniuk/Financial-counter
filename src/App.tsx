import {Categories} from './components/Categories/Categories'
import AppLayout from './hoc/AppLayout'
import Table from './components/UI/Table/Table'

function App() {
  return (
    <AppLayout>
      <Table>
        <Categories />
      </Table>
    </AppLayout>
  );
}

export default App;
