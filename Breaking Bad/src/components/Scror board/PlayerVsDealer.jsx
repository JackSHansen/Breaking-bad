import PlayerCard from "./PlayerCard";
import styles from "./PlayerVsDealer.module.scss";
import img1 from "../../assets/game.png";

const PlayerVsDealer = ({ userScore, dealerScore }) => {
  const players = [
    { name: "dealer", className: styles.dealerCard, dealerScore },
    { name: "Player", className: styles.playerCard, userScore },
  ];

  return (
    <section className={styles.gameContainer} aria-label="Scoreboard">
      <img src={img1} className={styles.backgroundImage} alt="Spilbaggrund" />
      <section className={styles.cardsContainer} aria-label="Spillerkort">
        {players.map((player, index) => (
          <PlayerCard
            key={index}
            name={player.name}
            className={player.className}
            score={player.userScore}
            dealerScore={player.dealerScore}
          />
        ))}
      </section>
    </section>
  );
};

export default PlayerVsDealer;
