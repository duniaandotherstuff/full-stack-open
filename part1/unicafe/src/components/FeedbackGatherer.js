import Button from "./Button"

const FeedbackGatherer = ({ incrementGoodFeedback, incrementNeutralFeedback, incrementBadFeedback }) => {
    return (
        <div>
            <h2>give feedback</h2>
            <div>
                <Button text="good" clickHandler={incrementGoodFeedback} />
                <Button text="neutral" clickHandler={incrementNeutralFeedback} />
                <Button text="bad" clickHandler={incrementBadFeedback} />
            </div>
        </div>
    )
}

export default FeedbackGatherer