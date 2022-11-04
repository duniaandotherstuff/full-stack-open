import StatisticLine from "./StatisticLine"

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
            <table>
                <tbody>
                    <StatisticLine name="good" value={good} />
                    <StatisticLine name="neutral" value={neutral} />
                    <StatisticLine name="bad" value={bad} />
                    <StatisticLine name="all" value={total} />
                    <StatisticLine name="average" value={average} />
                    <StatisticLine name="positive" value={positive} />
                </tbody>
            </table>
        </div>
    )
}

export default Statistics