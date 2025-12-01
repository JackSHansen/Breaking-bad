import { useState } from "react";
import style from "./GameRules.module.scss";
import bgImg from "../../assets/background.jpg";

export const GameRules = ({ action }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleCloseModal = () => {
    setIsOpen(false);
    action && action();
  };

  return (
    <>
      <div></div>
      {isOpen ? (
        <div className={style.modalStyling}>
          <span>
            <img src={bgImg} alt="Spilbaggrund" />
            <h2>Blackjack with dices</h2>
          </span>
          <span className={style.gameRules}>
            <p>Terninge-Breaking Blackjack Regler</p>
            <p>Du spiller mod den berygtede meth-dealer, Heisenberg, og hver spiller har én terning.</p>
            <p>Spilleren kan vælge at "stå" (holde sig til den nuværende sum). ved 18 point</p>
            <p>Formål: At få en samlet sum tættere på 21 end Heisenberg uden at gå over (buste).</p>
          </span>
          <button onClick={() => handleCloseModal()}>Start Game</button>
        </div>
      ) : null}
    </>
  );
};
