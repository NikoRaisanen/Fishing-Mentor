import { CardGroup } from "react-bootstrap";
import QuizCard from "./QuizCard"
const Quiz = () => {
    return (
        <>
        <CardGroup>
            <QuizCard text="Card 1" />
            <QuizCard text="Card 2" />
            <QuizCard text="Card 3" />
        </CardGroup>
        </>
    )
}

export default Quiz;