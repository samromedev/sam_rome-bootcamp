const App = () => {
  const Header = () => {
    return (
      <h1>Half Stack Application Development</h1>
    )
  }
  const Content = (count) => {
    return (
      <>
        <h2>Fundamentals of React, Exercises {count.value1}</h2>
        <h2>Using Props to pass data, Exercises {count.value2}</h2>
        <h2>State of a Component, Exercises {count.value3}</h2>
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
      <Header />
      <Content value1 = {10} value2 = {7} value3 = {14}/>
      <Total />
    </>
  )
}
export default App