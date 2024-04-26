import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import { useState } from 'react';

const [userInput, setUserInput] = useState({
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 12
})

function handleChange(inputId, newValue) {
  setUserInput((prevUserInput) => {
    return {
      ...prevUserInput,
      [inputId]: newValue 
    }
  });
}

function App() {
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput}/>
    </>
  )
}

export default App
