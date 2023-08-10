import React from 'react';
import './App.css';
import { AppContext } from './AppContext';
import Child1 from './child1';
import Child2 from './child2';

function App() {
  const [test, setTest] = React.useState<number>(0)

  const changeTest = () => {
    setTest((prev) => prev + 1)

  }

  console.log(test)

  return (
    <AppContext.Provider value={{ test, changeTest }}>
      <Child1 />
    </AppContext.Provider>
  );
}

export default App;
