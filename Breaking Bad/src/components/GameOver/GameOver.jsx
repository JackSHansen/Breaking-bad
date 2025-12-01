import style from "./GameOver.module.scss";

export const GameOver = ({ action, dealerWon, playerWon }) => {
  return (
    <>
      <div className={style.gameOverStyling}>
        <h3>Game Over!</h3>
        <button
          onClick={() => {
            action();
          }}
        >
          Play Again
        </button>
        {dealerWon && !playerWon ? <h3>Dealer Won!</h3> : null}
        {playerWon && !dealerWon ? <h3>Player Won!</h3> : null}
        {!dealerWon && !playerWon ? <h3>It's a draw</h3>: null}
      </div>
    </>
  );
};
