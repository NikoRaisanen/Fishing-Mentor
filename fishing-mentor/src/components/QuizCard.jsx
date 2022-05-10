import Card from 'react-bootstrap/Card';
import placeholder_img from '../img/blue_placeholder.png'
import './QuizCard.css'

const QuizCard = (props) => {
    return (
        <>
        <Card bg='info' style={{
            'background-color': 'gray',
            'display': 'inline-block',
            borderRadius: '5px',
            padding: '15px',
            margin: '10px'
        }}>
            <Card.Img variant="top" src={placeholder_img} />
            <Card.Body>
            <Card.Text>
                {props.text}
            </Card.Text>
            </Card.Body>
        </Card>
        </>
    )
}

export default QuizCard;