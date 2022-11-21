const AddPersonForm = ({ nameValue, numberValue, handleNameChange, handleNumberChange, handleSubmit }) => {
    const inputStyle = { marginLeft: 5, marginBottom: 5 }
    return (
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
    )
}

export default AddPersonForm