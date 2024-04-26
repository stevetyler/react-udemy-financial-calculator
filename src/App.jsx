import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Result from './components/Result.jsx';

import { useState } from 'react';

function App() {
  const [userValues, setUserValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 12
  });  

  const inputIsValid = userValues.duration > 0;

  function handleChange(inputId, newValue) {
    setUserValues((prevUserValues) => {
      return {
        ...prevUserValues,
        [inputId]: +newValue // set as number not string
      }
    });
  };


  return (
    <>
      <Header />
      <UserInput handleChange={handleChange} userValues={userValues}/>
      {!inputIsValid && (
        <p className="center">Please enter a valid duration</p>
      )}
      {inputIsValid &&
        <Result userValues={userValues}/>
      }
    </>
  )
}

export default App
