const AddPersonForm = ({ value, handleChange, handleSubmit }) => {
    const inputStyle = { marginLeft: 5 }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                name:
                <input value={value} onChange={handleChange} style={inputStyle} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default AddPersonForm