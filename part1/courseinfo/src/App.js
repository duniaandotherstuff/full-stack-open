import Course from "./components/Course"

const createPart = (partName, numberOfExercises) => {
  return {
    name: partName,
    exercises: numberOfExercises
  }
}

const App = () => {
  const course = {
    name: "Half stack application development",
    parts: [
      createPart("Fundamentals of React", 10),
      createPart("Using props to pass data", 7),
      createPart("State of a component", 14)
    ]
  }
  return <Course course={course} />
}

export default App