import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faDiceOne, 
    faDiceTwo, 
    faDiceThree, 
    faDiceFour, 
    faDiceFive, 
    faDiceSix 
} from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components/macro';
import 'animate.css';

const DiceStyle = styled(FontAwesomeIcon)`
    font-size: 12rem;
    margin: 2rem;
    path {
        fill: purple;    
    }
`;

const Dice = ({diceRandomNumber}) => {
    const [animateClassName, setClassName] = useState("animate__animated animate__shakeX");

    const dices = {
        One: faDiceOne,
        Two: faDiceTwo,
        Three: faDiceThree,
        Four: faDiceFour,
        Five: faDiceFive,
        Six: faDiceSix
    }

    const DiceIcon = dices[diceRandomNumber] || faDiceOne;

    useEffect(() => {
        setClassName('animate__animated animate__shakeX');
    }, [diceRandomNumber]);

    return (
        <DiceStyle 
            icon={DiceIcon} 
            className={animateClassName} 
            onAnimationEnd={() => setClassName('')}/>
    );
};

export default Dice;