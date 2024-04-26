import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";

export default function Result({ userValues }) {

  const resultsArr = calculateInvestmentResults(userValues);
  //console.log(resultsArr);
  const initialInvestment = 
    resultsArr[0].valueEndOfYear - 
    resultsArr[0].interest - 
    resultsArr[0].annualInvestment; 

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
      {resultsArr.map((yearData, i, array) => {
        const totalInterest = 
          yearData.valueEndOfYear - 
          yearData.annualInvestment * yearData.year -
          initialInvestment; 
        const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

        return (
          <tr>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.valueEndOfYear)}</td>
            <td>{formatter.format(yearData.interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(totalAmountInvested)}</td>
          </tr>
        )
      })}
      </tbody>
    </table>
  )
}
