const App = () => {

  //--------1.1 & 1.2------------
  //const course = 'Half Stack application development'
  //const part1 = 'Fundamentals of React'
  //const exercises1 = 10
  //const part2 = 'Using props to pass data'
  //const exercises2 = 7
  //const part3 = 'State of a component'
  //const exercises3 = 14

  //--------1.3-----------
  //const course = 'Half Stack application development'
  //const part1={
  //  name: 'Fundamentals of React',
  //  exercises: 10
  //}
//
  //const part2={
  //  name: 'Using props to pass data',
  //  exercises: 7
  //}
//
  //const part3={
  //  name: 'State of a component',
  //  exercises: 14
  //}

  ////---------1.4-------------
  //const course = 'Half Stack application development'
  //const parts=[
  //  {
  //    name: 'Fundamentals of React',
  //    exercises: 10
  //  },
  //  {
  //    name: 'Using props to pass data',
  //    exercises: 7
  //  },
  //  {
  //    name: 'State of a component',
  //    exercises: 14
  //  }
  //]


  //---------1.5-------------
  const course = {
      name: 'Half Stack application development',
      parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header=(props)=>{
    return(
      <>
      <h1>{props.courses.name}</h1>
      </>
    )
  }

  const Part = (props)=>{
    return(
      <>
      <p>{props.parts.name} {props.parts.exercises}</p>
      </>
    )
  }

  const Content =(props)=>{
    return(
      <>
      <Part parts={props.courses.parts[0]} />
      <Part parts={props.courses.parts[1]} />
      <Part parts={props.courses.parts[2]} />
      </>
    )
  }

  const Total = (props)=>{
    return(
      <>
      <p>Number of exercises {props.sum.parts[0].exercises+props.sum.parts[1].exercises+props.sum.parts[2].exercises}</p>
      </>
    )
  }


return (
  <div>
    <Header courses={course}/>
    <Content courses={course}/>
    <Total sum={course}/>
  </div>
)
}

export default App