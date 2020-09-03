import React, {useState} from 'react';
import './App.css';
import Dice from './components/dice/Dice';
import RollButton from './components/roll-button/RollButton';
import styled from 'styled-components/macro';

const DicesWrapper = styled.div`
  text-align: center;
`;

function App() {
  const [buttonText, setButtonText] = useState("Let's roll");
  const [diceRandomNumber, setDiceRandomNumber] = useState(null);
  const [diceRandomNumber2, setDiceRandomNumber2] = useState(null);
  const [isButtonDisabled, setIsDisabled] = useState(false);
  const numbers = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];

  const getRandomDice = () => {
    const randNumber1 = numbers[Math.floor(Math.random() * numbers.length)];
    const randNumber2 = numbers[Math.floor(Math.random() * numbers.length)];
    setIsDisabled(true);
    setButtonText('Rolling...');

    setTimeout(() => {
      setDiceRandomNumber(randNumber1);
      setDiceRandomNumber2(randNumber2);
      setIsDisabled(false);
      setButtonText("Let's roll");
    }, 500);
  }

  return (
    <div className="App">
      <DicesWrapper>
        <Dice diceRandomNumber={diceRandomNumber} />
        <Dice diceRandomNumber={diceRandomNumber2} />
      </DicesWrapper>
      
      <RollButton 
        buttonText={buttonText} 
        rollHandler={getRandomDice} 
        disabled={isButtonDisabled} />
    </div>
  );
}

export default App;