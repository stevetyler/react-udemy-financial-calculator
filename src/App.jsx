import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import { useState } from 'react';

const [userValues, setUserValues] = useState({
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 12
})

function handleChange(inputId, newValue) {
  setUserValues((prevUserValues) => {
    return {
      ...prevUserValues,
      [inputId]: newValue 
    }
  });
}

function App() {
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userValues={userValues}/>
    </>
  )
}

export default App
