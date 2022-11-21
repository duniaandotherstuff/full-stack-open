import { useState } from "react"
import AddPersonForm from "./components/AddPersonForm"
import PersonList from "./components/PersonsList"

const createPerson = (name) => {
  return { name }
}

const App = () => {
  const [persons, setPersons] = useState([
    createPerson("Arto Hellas"),
    createPerson("Ada Lovelace")
  ])
  const [newName, setNewName] = useState("")

  const handleChange = (event) => setNewName(event.target.value)
  const handleSubmit = (event) => {
    event.preventDefault()
    setPersons(persons.concat(createPerson(newName)))
    setNewName("")
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <AddPersonForm value={newName} handleChange={handleChange} handleSubmit={handleSubmit} />
      <PersonList persons={persons} />
    </div>
  )
}

export default App