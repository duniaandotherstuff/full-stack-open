const Total = ({ course }) => {
    const total = course.parts.reduce((acum, part) => acum + part.exercises, 0)
    const bold = {
      fontWeight: "bold"
    }
    return <p>In total, the course "{course.name}" has <span style={bold}>{total}</span> exercises.</p> 
}

export default Total