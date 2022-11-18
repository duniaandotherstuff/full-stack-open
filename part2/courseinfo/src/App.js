import ListOfCourses from "./components/ListOfCourses"

const createPart = (partId, partName, numberOfExercises) => {
  return {
    id: partId,
    name: partName,
    exercises: numberOfExercises
  }
}

const App = () => {
  const courses = [
    {
      id: 1,
      name: "Half stack application development",
      parts: [
        createPart(1, "Fundamentals of React", 10),
        createPart(2, "Using props to pass data", 7),
        createPart(3, "State of a component", 14),
        createPart(4, "Redux", 11)
      ]
    },
    {
      id: 2,
      name: "Node.js",
      parts: [
        createPart(1, "Rounting", 3),
        createPart(2, "Middlewares", 7),
        createPart(3, "Fakepart", 5)
      ]
    }
  ]
  return (
    <div>
      <h1>Available courses</h1>
      <ListOfCourses courses={courses} />
    </div>
  )
}

export default App