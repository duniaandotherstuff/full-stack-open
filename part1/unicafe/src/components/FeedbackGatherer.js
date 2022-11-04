const FeedbackGatherer = ({ incrementGoodFeedback, incrementNeutralFeedback, incrementBadFeedback }) => {
    const style = {
        marginRight: 5
    }
    return (
        <div>
            <h2>give feedback</h2>
            <div>
                <button style={style} onClick={incrementGoodFeedback}>good</button>
                <button style={style} onClick={incrementNeutralFeedback}>neutral</button>
                <button onClick={incrementBadFeedback}>bad</button>
            </div>
        </div>
    )
}

export default FeedbackGatherer