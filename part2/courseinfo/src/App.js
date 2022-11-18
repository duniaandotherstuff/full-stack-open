import Course from "./components/Course"

const createPart = (partId, partName, numberOfExercises) => {
  return {
    id: partId,
    name: partName,
    exercises: numberOfExercises
  }
}

const App = () => {
  const course = {
    id: 1,
    name: "Half stack application development",
    parts: [
      createPart(1, "Fundamentals of React", 10),
      createPart(2, "Using props to pass data", 7),
      createPart(3, "State of a component", 14),
      createPart(4, "Fake part", 12)
    ]
  }
  return (
    <div>
      <h1>Available courses</h1>
      <Course course={course} />
    </div>
  )
}

export default App