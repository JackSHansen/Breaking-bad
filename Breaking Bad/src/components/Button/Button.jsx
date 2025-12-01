import { useEffect } from "react";
import style from "./Button.module.scss";

export const Button = ({ action, text, gameOver, throwing}) => {

  const handleBtnClick = () => {
    action();
  }

  // const checkTrue = () => {
  //   if (gameOver) {
  //     return true;
  //   }
  //   if (throwing) {
  //     return true;
  //   }
  //   else {
  //     return false;
  //   }
  // }

  // useEffect(() => {
  //   console.log("Game", gameOver);
  //   console.log("Dice", throwing);
  
  // }, [gameOver, throwing])
  return (
    <>
      <button
        disabled={gameOver || throwing}
        onClick={() => handleBtnClick()}
        className={`${style.buttonStyling} ${gameOver || throwing ? style.gameOver : null}`}
      >
        {text}
      </button>
    </>
  );
};
