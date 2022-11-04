import Statistic from "./Statistic"

const Statistics = ({ good, neutral, bad }) => {
    return (
        <div>
            <h2>statistics</h2>
            <Statistic name="good" value={good} />
            <Statistic name="neutral" value={neutral} />
            <Statistic name="bad" value={bad} />
        </div>
    )
}

export default Statistics