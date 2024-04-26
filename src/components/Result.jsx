import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";

export default function Result({ userValues }) {

  const resultsArr = calculateInvestmentResults(userValues);
  console.log(resultsArr);
  
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
      {resultsArr.map((resultObj, i, array) => {
        return (
          <tr>
            <td>{resultObj.year}</td>
            <td>{formatter.format(resultObj.valueEndOfYear)}</td>
            <td>{formatter.format(resultObj.interest)}</td>
            
            <td></td>
          </tr>
        )
      })}
      </tbody>
    </table>
  )
}
