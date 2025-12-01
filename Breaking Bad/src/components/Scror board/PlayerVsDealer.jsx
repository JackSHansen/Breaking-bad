import PlayerCard from "./PlayerCard";
import styles from "./PlayerVsDealer.module.scss";
import img1 from "../../assets/game.png";

const PlayerVsDealer = ({ userScore, dealerScore }) => {
  const players = [
    { name: "dealer", className: styles.dealerCard, dealerScore },
    { name: "Player", className: styles.playerCard, userScore },
  ];

  return (
    <main className={styles.gameContainer}>
      <img src={img1} className={styles.backgroundImage} alt="" />
      <section className={styles.cardsContainer}>
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
    </main>
  );
};

export default PlayerVsDealer;
