import React from 'react';
import './App.css';
import ChatPreview from './components/ChatPreview/ChatPreview';



function App() {
  const [test, setTest] = React.useState<number>(0)

  const changeTest = () => {
    setTest((prev) => prev + 1)

  }

  console.log(test)

  return (
    <>
      <ChatPreview />
    </>
  );
}

export default App;
