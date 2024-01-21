export default function PlayerCard( {choice} ){

  const rockImg = "src/assets/rock.png"
  const paperImg = "src/assets/paper.png"
  const scissorImg = "src/assets/scissor.png"
  const playerImg = "src/assets/player.png"
  const computerImg = "src/assets/computer.png"
  let source

  switch (choice) {
    case 'rock':
      source = rockImg
    break
    case 'paper':
      source = paperImg
    break
    case 'scissors':
      source = scissorImg
    break
    case 'player':
      source = playerImg
      break
    case 'computer':
      source = computerImg
  }

  return (
    <div className="image-holder">
      <img className="image-card" src={source} alt="" />
    </div>
  )
}