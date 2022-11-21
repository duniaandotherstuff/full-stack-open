import { useState } from "react"
import AddPersonForm from "./components/AddPersonForm"
import PersonList from "./components/PersonsList"

const createPerson = (name, number) => {
  return { name, number }
}

const App = () => {
  const [persons, setPersons] = useState([
    createPerson("Arto Hellas", "040-123456"),
    createPerson("Ada Lovelace", "39-44-5323523")
  ])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleSubmit = (event) => {
    event.preventDefault()
    if (persons.find(person => person.name === newName)) {
      window.alert(`${newName} is already added to the phonebook`)
    }
    else {
      setPersons(persons.concat(createPerson(newName, newNumber)))
      setNewName("")
      setNewNumber("")
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <AddPersonForm nameValue={newName} numberValue={newNumber} handleNameChange={handleNameChange} 
        handleNumberChange={handleNumberChange} handleSubmit={handleSubmit} />
      <PersonList persons={persons} />
    </div>
  )
}

export default App