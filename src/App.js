import { useContext } from 'react';
import './App.css';
import { AppContext } from './contexts/app_context';

import Child from './components/Child';

function App() {

  // let { state, setState } = useContext(AppContext)

  let { children, complete, setComplete, toggleComplete } = useContext(AppContext)

  return (
    <div className="App">

      {children.map((child) => {
        return (
          <Child child={child}/>
        )
      })}
      
    </div>
  );
}

export default App;
