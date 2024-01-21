import { useEffect, useState } from "react";
import Result from "./Result";
import PlayerCard from "./PlayerCard";

function App() {
  const [userChoice, setUserChoice] = useState('player')
  const [computerChoice, setComputerChoice] = useState('computer')
  console.log('user', userChoice)
  console.log('pc', computerChoice)

  useEffect(() => {
    if (userChoice === 'player') return
    let choices = ['rock', 'paper', 'scissors']
    let randomNum = Math.floor(Math.random()* 3)
    setComputerChoice(choices[randomNum])
  console.log('effect')

  }, [userChoice])

  return (
    <div className="site-wrap">
    <div className="card-wrap">
      <div>
        <PlayerCard choice={userChoice}/>
        <span>PLAYER</span>
        </div>
      <div>
        <PlayerCard choice={computerChoice}/>
        <span>COMPUTER</span>
      </div>
    </div>
    <div className="button-wrap">
      <div>
      <button onClick={() => setUserChoice('rock')}>ROCK</button>
      </div>
      <div>
      <button onClick={() => setUserChoice('paper')}>PAPER</button>
      </div>
      <div>
      <button onClick={() => setUserChoice('scissors')}>SCISSORS</button>
      </div>
    </div>
    <button className="reset-btn" onClick={() => {window.location.reload()}}>RESET</button>
    <h2>Result:</h2>
    {userChoice === 'player' ? <div className="result"><br></br></div> : 
    <Result userChoice={userChoice} computerChoice={computerChoice}/>
  }
    </div>
  );
}

export default App;
