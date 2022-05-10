import { CardGroup } from "react-bootstrap";
import QuizCard from "./QuizCard"
const Quiz = () => {
    return (
        <>
        <CardGroup style={{ 'text-align': 'center' }}>
            <QuizCard text="Bass" />
            <QuizCard text="Trout" />
            <QuizCard text="Bluegill" />
        </CardGroup>
        </>
    )
}

export default Quiz;