import React, {useState} from 'react';
import './App.css';
import Dice from './components/dice/Dice';
import RollButton from './components/roll-button/RollButton';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHandPointDown} from "@fortawesome/free-solid-svg-icons";

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
    const randNumber1 = numbers[Math.floor(Math.random() * numbers.length)];
    const randNumber2 = numbers[Math.floor(Math.random() * numbers.length)];
    setIsDisabled(true);
    setButtonText('Rolling...');

    setTimeout(() => {
      setDiceRandomNumber([randNumber1, randNumber2]);
      setIsDisabled(false);
      setButtonText("Let's roll");
    }, 500);
  }

  return (
    <div className="App">
      <DicesWrapper>
        {!diceRandomNumber && <PointDownIcon icon={faHandPointDown} />}
        <Dice diceRandomNumbers={diceRandomNumber} />
      </DicesWrapper>
      
      <RollButton 
        buttonText={buttonText} 
        rollHandler={getRandomDice} 
        disabled={isButtonDisabled} />
    </div>
  );
}

export default App;