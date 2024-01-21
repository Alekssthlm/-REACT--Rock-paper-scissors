export default function Result ({userChoice, computerChoice}){
  let win = <div className="result win">YOU WIN</div>
  let lose = <div className="result lose">YOU LOSE</div>
  let jsx 

  if(userChoice === computerChoice){
    jsx = <p className="result">TIE</p>
  } else if(userChoice === 'rock') {
    if(computerChoice === 'paper') jsx = lose
    if(computerChoice === 'scissors') jsx = win
  } else if(userChoice === 'paper') {
    if(computerChoice === 'rock') jsx = win
    if(computerChoice === 'scissors') jsx = lose
  } else if(userChoice === 'scissors') {
    if(computerChoice === 'paper') jsx = win
    if(computerChoice === 'rock') jsx = lose
  } 


  return (
    jsx
  )
}