const AnecdoteInfo = ({ anecdote, votes }) => {
    return (
        <div>
            <p>"{anecdote}"</p>
            <p>This anecdote has {votes} votes.</p>
        </div>
    )
}

export default AnecdoteInfo