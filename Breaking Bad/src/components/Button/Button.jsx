import style from "./Button.module.scss";

export const Button = ({ action, text, gameOver, throwing}) => {

  const handleBtnClick = () => {
    action();
  }

  return (
    <>
      <button
        type="button"
        disabled={gameOver || throwing}
        aria-busy={throwing}
        onClick={() => handleBtnClick()}
        className={`${style.buttonStyling} ${gameOver || throwing ? style.gameOver : null}`}
      >
        {text}
      </button>
    </>
  );
};
