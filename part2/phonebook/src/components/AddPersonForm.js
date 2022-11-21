const AddPersonForm = ({ nameValue, numberValue, handleNameChange, handleNumberChange, handleSubmit }) => {
    const inputStyle = { marginLeft: 5, marginBottom: 5 }
    return (
        <div>
            <h2>Add a new person</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    name:
                    <input value={nameValue} onChange={handleNameChange} style={inputStyle} />
                </div>
                <div>
                    number:
                    <input value={numberValue} onChange={handleNumberChange} style={inputStyle} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default AddPersonForm