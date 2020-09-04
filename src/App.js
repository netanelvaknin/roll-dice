import React, {useState} from 'react';
import './App.css';
import Dice from './components/dice/Dice';
import RollButton from './components/roll-button/RollButton';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHandPointDown} from "@fortawesome/free-solid-svg-icons";

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DicesWrapper = styled.div`
  text-align: center;
`;

const PointDownIcon = styled(FontAwesomeIcon)`
  font-size: 8rem;
  margin: 3rem;

  path {
    fill: #ffcc33;
  }
`;

function App() {
  const [buttonText, setButtonText] = useState("Let's roll");
  const [diceRandomNumber, setDiceRandomNumber] = useState(null);
  const [isButtonDisabled, setIsDisabled] = useState(false);
  const numbers = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];

  const getRandomDice = () => {
    // Enter how much you want. Every one random number = one dice
    const randomNumbers = [
      numbers[Math.floor(Math.random() * numbers.length)],
      numbers[Math.floor(Math.random() * numbers.length)],
    ];

    setIsDisabled(true);
    setButtonText('Rolling...');

    setTimeout(() => {
      setDiceRandomNumber([...randomNumbers]);
      setIsDisabled(false);
      setButtonText("Let's roll");
    }, 500);
  }

  return (
    <AppContainer>
      <DicesWrapper>
        {!diceRandomNumber && <PointDownIcon icon={faHandPointDown} />}
        <Dice diceRandomNumbers={diceRandomNumber} />
      </DicesWrapper>
      
      <RollButton 
        buttonText={buttonText} 
        rollHandler={getRandomDice} 
        disabled={isButtonDisabled} />
    </AppContainer>
  );
}

export default App;