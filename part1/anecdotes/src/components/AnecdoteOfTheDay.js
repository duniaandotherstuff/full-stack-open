import Button from "./Button"
import AnecdoteInfo from "./AnecdoteInfo"

const AnecdoteOfTheDay = ({ anecdotes, selectedIndex, votes, voteHandler, nextRandomAnecdoteHandler }) => {
    return (
        <div>
            <h2>Anecdote of the day</h2>
            <AnecdoteInfo anecdote={anecdotes[selectedIndex]} votes={votes[selectedIndex]} />
            <div>
                <Button text="vote" clickHandler={voteHandler} />
                <Button text="next anecdote" clickHandler={nextRandomAnecdoteHandler} />
            </div>
        </div>
    )
}

export default AnecdoteOfTheDay