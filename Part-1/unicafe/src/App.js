import {useState} from 'react'


const Button = (props) =>(
  <button onClick={props.handler}>{props.text}</button>
)


const StatisticLine = (props) => {
  return (
    <>
      <td>{props.text}</td> 
      <td>{props.value}</td>
    </>

  )
}

const Statistics = (props) => {
  const good = props.good
  const netural = props.netural
  const bad = props.bad
  if (good || bad || netural){

    return(

      <table>
        <tbody>
          <tr><StatisticLine text="good" value={good} /></tr>
          <tr><StatisticLine text="neutral" value={netural} /></tr>
          <tr><StatisticLine text="bad" value={bad} /></tr>
          <tr><StatisticLine text="all" value={good + netural + bad} /></tr>
          <tr><StatisticLine text="average" value={(good - bad) / (good + netural + props.bad)} /></tr>
          <tr><StatisticLine text="positive" value={((good) / (good + netural + bad)) * 100} /></tr>
        </tbody>
      </table>
    )
  }
  else
  {
    return(
      <div>
      No feedback given
      </div>
    )
    
  }

    
}


const App = () => {

  const [good, setGood] = useState(0)
  const [netural, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodHandler = ()=>{
    setGood(good+1)
  }
  const badHandler = ()=>{
    setBad(bad+1)
  }
  const neutralHandler = ()=>{
    setNeutral(netural+1)
  }


  
  return (
    <div>
      <h1>give feedback</h1>
      <Button handler={goodHandler} text="good"/>
      <Button handler={neutralHandler} text="neutral"/>
      <Button handler={badHandler} text="bad"/>
      <h1>statistics</h1>
      <Statistics good = {good} netural = {netural} bad = {bad}/>
     </div>
  )
}

export default App