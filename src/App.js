import './App.css';
import Task from './components/Task';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

import EmployeeTasks from './EmployeeTasks/EmployeeTasks';

function App() {
  return (
    <BrowserRouter>
      <Task/>
      <Routes>
        <Route  path='/employeeTasks' element = {<EmployeeTasks/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
