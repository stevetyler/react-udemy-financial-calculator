export default function UserInput({ handleChange, userValues }) {
  
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input 
            id="initialInvestment" 
            type="number" 
            onChange={(event) => handleChange(event.target.id, event.target.value)} 
            value={userValues.initialInvestment} 
            required/>
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input 
            id="annualInvestment" 
            type="number" 
            onChange={(event) => handleChange(event.target.id, event.target.value)} 
            value={userValues.annualInvestment} 
            required/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input 
          id="expectedReturn" 
          type="number" 
          onChange={(event) => handleChange(event.target.id, event.target.value)} 
          value={userValues.expectedReturn} 
          required/>
        </p>
        <p>
          <label>DURATION</label>
          <input 
          id="duration" 
          type="number" 
          onChange={(event) => handleChange(event.target.id, event.target.value)} 
          value={userValues.duration} 
          required />
        </p>
      </div>
    </section>
  )
}
