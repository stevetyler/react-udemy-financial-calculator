import { useState } from 'react';export default function UserInput({ handleChange, userInput }) {
  
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input 
            id="initialInvestment" 
            type="number" 
            onChange={(event) => handleChange(event.target.id, event.target.value)} 
            value={userInput.initialInvestment} required/>
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
