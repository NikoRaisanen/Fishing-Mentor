import Card from 'react-bootstrap/Card';

const QuizCard = () => {
    return (
        <Card>
            <Card.Img variant="top" src="IMG_HERE" />
            <Card.Body>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default QuizCard;