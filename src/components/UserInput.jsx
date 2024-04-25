import { useState } from 'react';

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 12
  })

  function handleOnChange(value, inputId) {
      setUserInput((prevUserInput) => {
        return {
          ...prevUserInput,
          [inputId]: value 
        }
      });
    }
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input id="initialInvestment" type="number" required/>
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input id="annualInvestment" type="number" required/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input id="expectedReturn" type="number" required/>
        </p>
        <p>
          <label>DURATION</label>
          <input id="duration" type="number" required />
        </p>
      </div>
    </section>
  )
}
