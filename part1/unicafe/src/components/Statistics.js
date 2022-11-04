import Statistic from "./Statistic"

const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad
    if (total === 0) {
        return (
            <div>
                <h2>statistics</h2>
                No feedback received yet
            </div>
        )
    }
    const average = ((good - bad) / total).toFixed(2)
    const positive = (100 * good / total).toFixed(2).toString().concat(" %")
    return (
        <div>
            <h2>statistics</h2>
            <Statistic name="good" value={good} />
            <Statistic name="neutral" value={neutral} />
            <Statistic name="bad" value={bad} />
            <Statistic name="all" value={total} />
            <Statistic name="average" value={average} />
            <Statistic name="positive" value={positive} />
        </div>
    )
}

export default Statistics