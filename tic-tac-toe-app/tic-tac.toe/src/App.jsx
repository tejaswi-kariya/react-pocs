import Player from "./components/Player"


function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="player">
         <Player initialName="Player 1"  symbol="X"></Player>
         <Player initialName="Player 2"  symbol="O"></Player>
        </ol>
      </div>
      Game Board
    </main>
  )
}

export default App