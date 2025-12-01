import styles from "./PlayerVsDealer.module.scss";

const PlayerCard = ({ name, className, score, dealerScore }) => {
  const displayScore = score ?? dealerScore;
  return (
    <div className={`${styles.card} ${className}`}>
      <h2 className={styles.cardTitle}>{name}</h2>
      <p>{displayScore}</p>
    </div>
  );
};

export default PlayerCard;
