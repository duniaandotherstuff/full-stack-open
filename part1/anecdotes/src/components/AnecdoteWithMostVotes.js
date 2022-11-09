import AnecdoteInfo from "./AnecdoteInfo"

const AnecdoteWithMostVotes = ({ anecdotes, votes }) => {
    const indexOfTheAnecdoteWithMaxVotes = votes.indexOf(Math.max(...votes))
    return (
        <div>
            <h2>Anecdote with most votes</h2>
            <AnecdoteInfo anecdote={anecdotes[indexOfTheAnecdoteWithMaxVotes]}
                votes={votes[indexOfTheAnecdoteWithMaxVotes]} />
        </div>
    )
}

export default AnecdoteWithMostVotes
