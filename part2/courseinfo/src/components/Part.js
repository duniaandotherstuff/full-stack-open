const Part = ({ part }) => {
    const bold = {
      fontWeight: "bold"
    }
    return <p>{part.name}: <span style={bold}>{part.exercises}</span> exercises.</p>
}

export default Part