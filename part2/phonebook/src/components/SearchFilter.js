const SearchFilter = ({ filterValue, handleFilterChange }) => {
    const inputStyle = { marginLeft: 5 }
    return (
        <div>
            filter names containing:
            <input value={filterValue} onChange={handleFilterChange} style={inputStyle} />
        </div>
    )
}

export default SearchFilter