import { useState } from "react"
import SearchFilter from "./components/SearchFilter"
import AddPersonForm from "./components/AddPersonForm"
import PersonList from "./components/PersonsList"

const createPerson = (id, name, number) => {
  return { id, name, number }
}

const App = () => {
  const [persons, setPersons] = useState([
    createPerson(1, "Arto Hellas", "040-123456"),
    createPerson(2, "Ada Lovelace", "39-44-5323523"),
    createPerson(3, "Dan Abramov", "12-43-234345"),
    createPerson(4, "Mary Poppendieck", "39-23-6423122")
  ])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [filter, setFilter] = useState("")

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterChange = (event) => setFilter(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (persons.find(person => person.name === newName)) {
      window.alert(`${newName} is already added to the phonebook`)
    }
    else {
      const maxId = Math.max(...persons.map(person => person.id))
      setPersons(persons.concat(createPerson(maxId+1, newName, newNumber)))
      setNewName("")
      setNewNumber("")
    }
  }

  const personsToDisplay = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h1>Phonebook</h1>
      <SearchFilter filterValue={filter} handleFilterChange={handleFilterChange} />
      <AddPersonForm nameValue={newName} numberValue={newNumber} handleNameChange={handleNameChange} 
        handleNumberChange={handleNumberChange} handleSubmit={handleSubmit} />
      <PersonList persons={personsToDisplay} />
    </div>
  )
}

export default App