const App = () => {
  const Header = () => {
    return (
      <h1>Half Stack Application Development</h1>
    )
  }
  const Part = (part) => {
    return (
      <>
      <h2>{part.name} , {part.number}</h2>
      </>
    )
  }
  const Total = (totalcount) => {
    let countExercises = 10 + 7 + 14;
    totalcount = countExercises
    return (
      <h3> Total of exercises {totalcount}</h3>
    )
  }
  return (
    <>
      <Header/>
      <Part name = 'Fundamentals of React'  number = '10' />
      <Part name = 'Using props to pass data' number = '7' />
      <Part name = 'State of a component' number = '14' />
      <Total />
    </>
  )
}
export default App