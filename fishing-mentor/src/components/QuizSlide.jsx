import { CardGroup } from 'react-bootstrap';
import QuizCard from './QuizCard'
import QuizQuestion from './QuizQuestion'
const QuizSlide = (props) => {
    return (
        <>
        <QuizQuestion question={props.question}/>
        <CardGroup style={{ 'text-align': 'center' }}>
            {props.cards.map((card) => {
                return (<QuizCard text={card}/>)
            })}
        </CardGroup>
        </>
    )
}

export default QuizSlide;