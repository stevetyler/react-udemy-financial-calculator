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
  
  function handleChange(inputId, newValue) {
    setUserValues((prevUserValues) => {
      return {
        ...prevUserValues,
        [inputId]: newValue 
      }
    });
  }

  return (
    <>
      <Header />
      <UserInput handleChange={handleChange} userValues={userValues}/>
      <table id="result">
        <thead>
          <tr>
            <th>Year {userValues.duration}</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>

          {/* {[...Array({userValues.duration})].map((e, i) => <Result />)} */}
          <Result />
        </tbody>
      </table>
    </>
  )
}

export default App
