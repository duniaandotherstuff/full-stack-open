import PersonLine from "./PersonLine"

const PersonList = ({ persons }) => {
    return (
        <div>
            <h2>Numbers</h2>
            {persons.map(person => <PersonLine key={person.name} person={person} />)}
        </div>
    )
}

export default PersonList