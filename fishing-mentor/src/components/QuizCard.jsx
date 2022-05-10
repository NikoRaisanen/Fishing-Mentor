import Card from 'react-bootstrap/Card';
import placeholder_img from '../img/blue_placeholder.png'
import './QuizCard.css'

const QuizCard = (props) => {
    return (
        <>
        <Card className='quiz-card'>
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