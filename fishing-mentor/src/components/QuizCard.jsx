import Card from 'react-bootstrap/Card';
import placeholder_img from '../img/blue_placeholder.png'
import './QuizCard.css'
import React, { useEffect } from 'react'
import { useTransition, animated } from 'react-spring'

const QuizCard = (props) => {
    useEffect(() => {
        console.log('mounting card useEffect')
        return () => {
            console.log('unmounting card useEffect')
        }
    }, [props.wobbleState])

    // const transition = useTransition(props.wobbleState, {
    //     from: { x: -400 },
    //     enter: { x: 0},
    //     leave: { x: 400 },
    //   })

    // transition((style, item) => 
    //   item ? <animated.div style={style}>random</animated.div> : '' 
    // )
    return (
        <>
        <Card onClick={props.clickAction} className='quiz-card'>
            {/* {transition((style, item) => 
                item ? <animated.div style={style}>random</animated.div> : '' 
            )} */}
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