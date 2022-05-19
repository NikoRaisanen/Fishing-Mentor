import Card from 'react-bootstrap/Card';
import placeholder_img from '../img/blue_placeholder.png'
import './QuizCard.css'

const QuizCard = (props) => {
    const handleCardClick = (selectedCard) => {
        // const nextQuestion = currentQuestion + 1
        // setCurrentQuestion(nextQuestion)
        console.log('clicked')
    }
    return (
        <>
        <Card onClick={handleCardClick} className='quiz-card'>
            <Card.Img variant="top" src={placeholder_img} />
            <Card.Body>
            <Card.Text className="quiz-card-text">
                {props.text}
            </Card.Text>
            </Card.Body>
        </Card>
        </>
    )
}

export default QuizCard;