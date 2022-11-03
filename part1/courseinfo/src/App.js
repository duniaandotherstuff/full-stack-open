const Header = ({ course }) => <h1>{course}</h1>

const Part = ({ part }) => <p>{part.name}: {part.exercises} exercises.</p>

const Content = ({ part1, part2, part3 }) => {
  return (
    <div>
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
    </div>
  )
}

const Total = ({ part1, part2, part3 }) => {
  const total = part1.exercises + part2.exercises + part3.exercises
  return <p>In total, the course has {total} exercises.</p> 
}

const createPart = (partName, numberOfExercises) => {
  return {
    name: partName,
    exercises: numberOfExercises
  }
}

const App = () => {
  const course = "Half stack application development"
  const part1 = createPart("Fundamentals of React", 10)
  const part2 = createPart("Using props to pass data", 7)
  const part3 = createPart("State of a component", 14)
  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
    </div>
  )
}

export default App