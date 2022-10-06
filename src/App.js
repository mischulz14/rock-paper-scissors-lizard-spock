import './App.css';
import { useState } from 'react';

document.title = 'Rock Paper Scissors Lizard Spock';

const options = ['rock', 'paper', 'scissors', 'spock', 'lizard'];

function App() {
  const [chosenIcon, setChosenIcon] = useState('');
  const [computedIcon, setComputedICon] = useState(
    options[Math.floor(Math.random() * options.length)],
  );
  const [checking, setChecking] = useState(false);
  const [score, setScore] = useState(0);
  const [youWon, setYouWon] = useState('no');
  const [winningMessage, setWinningMessage] = useState('YOU WIN!');
  const [showRules, setShowRules] = useState(false);

  function handleIconChose(e) {
    setChecking(true);
    setChosenIcon(e.currentTarget.id);
    setComputedICon(options[Math.floor(Math.random() * options.length)]);
  }

  function checkForWinner() {
    if (
      (chosenIcon === 'spock' && computedIcon === 'scissors') ||
      (chosenIcon === 'spock' && computedIcon === 'rock')
    ) {
      setWinningMessage('YOU WIN');
      setScore(score + 1);
      setYouWon('yes');
    } else if (
      (chosenIcon === 'scissors' && computedIcon === 'paper') ||
      (chosenIcon === 'scissors' && computedIcon === 'lizard')
    ) {
      setWinningMessage('YOU WIN');
      setScore(score + 1);
      setYouWon('yes');
    } else if (
      (chosenIcon === 'paper' && computedIcon === 'rock') ||
      (chosenIcon === 'paper' && computedIcon === 'spock')
    ) {
      setWinningMessage('YOU WIN');
      setScore(score + 1);
      setYouWon('yes');
    } else if (
      (chosenIcon === 'rock' && computedIcon === 'lizard') ||
      (chosenIcon === 'rock' && computedIcon === 'scissors')
    ) {
      setWinningMessage('YOU WIN');
      setScore(score + 1);
      setYouWon('yes');
    } else if (
      (chosenIcon === 'lizard' && computedIcon === 'spock') ||
      (chosenIcon === 'lizard' && computedIcon === 'paper')
    ) {
      setWinningMessage('YOU WIN');
      setScore((prev) => prev + 1);
      setYouWon('yes');
    } else if (chosenIcon === computedIcon) {
      setWinningMessage("IT'S A DRAW");
      setYouWon('');
    } else {
      setWinningMessage('YOU LOSE');
      setYouWon('no');
    }
  }

  return (
    <div className="App">
      <section className="score__container">
        <div>
          <img className="logo" alt="logo" src="images/logo-bonus.svg" />
        </div>
        <div className="score__board">
          <span className="score__board-heading">SCORE</span>
          <span className="score">{score}</span>
        </div>
      </section>
      {!checking && (
        <section className="icons">
          <div className="icons__container">
            <div
              id="scissors"
              onClick={(e) => handleIconChose(e)}
              className="icon__container scissors"
            >
              <img className="icon" src="images/icon-scissors.svg" alt="icon" />
            </div>
            <div
              id="spock"
              onClick={(e) => handleIconChose(e)}
              className="icon__container spock"
            >
              <img className="icon" src="images/icon-spock.svg" alt="icon" />
            </div>
            <div
              id="paper"
              onClick={(e) => handleIconChose(e)}
              className="icon__container paper"
            >
              <img className="icon" src="images/icon-paper.svg" alt="icon" />
            </div>
            <div
              id="lizard"
              onClick={(e) => handleIconChose(e)}
              className="icon__container lizard"
            >
              <img className="icon " src="images/icon-lizard.svg" alt="icon" />
            </div>
            <div
              id="rock"
              onClick={(e) => handleIconChose(e)}
              className="icon__container rock"
            >
              <img className="icon " src="images/icon-rock.svg" alt="icon" />
            </div>
          </div>
        </section>
      )}

      {checking && (
        <section onLoad={checkForWinner} className="playing">
          <div className="winning-message">
            <p>{winningMessage}</p>
            <button onClick={() => setChecking((prev) => !prev)}>
              Play again
            </button>
          </div>

          <div className="playing__container">
            <p className="playing__heading">YOU PICKED</p>
            <div
              className={`icon__container-playing left playing__${chosenIcon} ${
                youWon === 'yes' && 'winner'
              }`}
            >
              <img
                src={`images/icon-${chosenIcon}.svg`}
                className="playing__icon"
                value=""
                alt="icon"
              />
            </div>
          </div>
          <div className="playing__container">
            <p className="playing__heading">THE HOUSE PICKED</p>
            <div
              className={`icon__container-playing right playing__${computedIcon} ${
                youWon === 'no' && 'winner'
              }`}
            >
              <img
                src={`images/icon-${computedIcon}.svg`}
                className="playing__icon"
                alt="icon"
              />
            </div>
          </div>
        </section>
      )}
      <div onClick={() => setShowRules(true)} className="rules">
        RULES
      </div>
      {showRules && (
        <div onClick={() => setShowRules(false)} className="rules__overlay">
          <img src="images/image-rules-bonus.svg" alt="rules" />
        </div>
      )}
    </div>
  );
}

export default App;
