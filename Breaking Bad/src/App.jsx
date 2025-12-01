import { useEffect, useState } from "react";

import { Button } from "./components/Button/Button";
import { Dice } from "./components/Dice/Dice";
import { GameBoard } from "./components/GameBoard/GameBoard";
import { GameRules } from "./components/GameRules/GameRules";
import { GameOver } from "./components/GameOver/GameOver";
// import PlayerCard from "./components/Scror board/PlayerCard";
import PlayerVsDealer from "./components/Scror board/PlayerVsDealer";
import "./App.scss";
import heisenbergImg from "./assets/Heisenberg.jpg";

function App() {
  const [playerDiceSide, setPlayerDiceSide] = useState(0);
  const [dealerDiceSide, setDealerDiceSide] = useState(0);

  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);

  const [diceThrown, setDiceThrown] = useState(false);

  const [canStand, setCanStand] = useState(false);
  const [dealerStand, setDealerStand] = useState(false);

  const [playerWon, setPlayerWon] = useState(false);
  const [dealerWon, setDealerWon] = useState(false);

  const [dealersTurn, setDealersTurn] = useState(false);

  const [gameOver, setGameOver] = useState(false);

  // Cookie consent + GA
  const [cookieConsent, setCookieConsent] = useState(null); // 'granted' | 'denied' | null
  const GA_ID = import.meta.env.VITE_GA_ID || "G-XXXXXXXXXX";

  const enableAnalytics = () => {
    if (typeof window === "undefined" || window.__gaLoaded || !GA_ID) return;
    window.dataLayer = window.dataLayer || [];
    function gtag(){ window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", GA_ID, { anonymize_ip: true });

    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    s.onload = () => { window.__gaLoaded = true; };
    document.head.appendChild(s);
  };

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "granted");
    setCookieConsent("granted");
  };

  const rejectCookies = () => {
    localStorage.setItem("cookie_consent", "denied");
    setCookieConsent("denied");
  };

  useEffect(() => {
    const saved = localStorage.getItem("cookie_consent");
    if (saved === "granted" || saved === "denied") setCookieConsent(saved);
  }, []);

  useEffect(() => {
    if (cookieConsent === "granted") enableAnalytics();
  }, [cookieConsent]);

  let diceAnimation = false;

  const handleDiceThrow = () => {
    const randNumber = Math.floor(Math.random() * 6) + 1;
    setPlayerDiceSide(randNumber);
    setTimeout(() => {
      setPlayerScore((prevScore) => prevScore + randNumber);
    }, 1000)
    setDealersTurn(true);
    diceAnimation = true;
    console.log(diceThrown);
    setDiceThrown(diceAnimation);
    if (diceThrown) {
      diceAnimation = false;
      console.log("Nice Animation");
      setDiceThrown(diceAnimation);
    }

    if (dealerStand) {
      setDealersTurn(false);
    }
  };

  useEffect(() => {
    let time = 0;
    time = setTimeout(() => {
      setDiceThrown(false);
    }, 1000)
    return () => clearTimeout(time) 
    
  }, [diceThrown])

  const handleDealerDiceThrow = () => {
    const randNumber = Math.floor(Math.random() * 6) + 1;
    setDealerDiceSide(randNumber);
    setTimeout(() => {
      setDealerScore((prevScore) => prevScore + randNumber);
    }, 1000)
    setDealersTurn(false);
    // diceAnimation = true;
    // console.log(diceThrown);
    // setDiceThrown(diceAnimation);
    // if (diceThrown) {
    //   diceAnimation = false;
    //   console.log("Nice Animation");
    //   setDiceThrown(diceAnimation);
    // }
  };

  const handleResetGame = () => {
    setDealerDiceSide(0);
    setPlayerDiceSide(0);
    setDealerScore(0);
    setPlayerScore(0);
    setCanStand(false);
    setDealerWon(false);
    setPlayerWon(false);
    setGameOver(false);
    setDealersTurn(true);
    setDealerStand(false);
  };

  const handlePlayerStand = () => {
    setDealersTurn(true);
    if (playerScore > dealerScore) {
      setPlayerWon(true);
      setGameOver(true);
    }

    if (dealerScore > playerScore) {
      setDealerWon(true);
      setGameOver(true);
    }

    if (dealerStand) {
      setDealersTurn(false);
    }
  };

  const handleDealerStand = () => {
    setDealersTurn(false);
    setDealerStand(true);
  }

  useEffect(() => {
    if (dealersTurn) {
      handleDealerDiceThrow();
    }
  }, [dealersTurn]);

  useEffect(() => {
    if (dealerScore === 21 && playerScore !== 21) {
      console.log("Dealer Wins!");
      setDealerWon(true);
      setGameOver(true);
    }

    if (dealerScore > 21) {
      console.log("Dealer bust!");
      setPlayerWon(true);
      setGameOver(true);
    }

    if (dealerScore >= 18) {
      const randomDec = Math.floor(Math.random() * 2);
      if (randomDec === 0) {
        handleDealerStand();
        console.log("Stand");
        
      }
      if (randomDec === 1) {
        // setDealersTurn(true);
        console.log("Hit");
        // setDealerStand(false);
      }
    }
  }, [dealerScore]);

  useEffect(() => {
    if (playerScore === 21 && dealerScore !== 21) {
      console.log("Player Wins!");
      setPlayerWon(true);
      setGameOver(true);
    }

    if (playerScore > 21) {
      console.log("Player bust");
      setDealerWon(true);
      setGameOver(true);
    }

    if (playerScore >= 18) {
      setCanStand(true);
    }
  }, [playerScore]);

  useEffect(() => {
    if (!gameOver) {
      console.log("Game Starting");
    } else {
      console.log("Game Over");
    }
  }, [gameOver]);

  useEffect(() => {
    document.title = "Breaking Blackjack";
    const setMeta = (selector, attr, val) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, val);
    };
    setMeta('meta[name="description"]', 'content', 'Breaking Blackjack – et simpelt terninge-blackjack spil. Spil mod dealeren og kom tættest på 21 uden at gå over.');
    setMeta('meta[property="og:title"]', 'content', 'Breaking Blackjack');
    setMeta('meta[property="og:description"]', 'content', 'Simpelt terninge-blackjack spil bygget i React. Prøv at slå dealeren til 21.');
  }, []);

  return (
    <>
      <GameBoard>
        <header>
          <h1 id="site-title">
            <span className="element-container">5</span>eaking{" "}
            <span className="element-container">B</span>lackjack
          </h1>
        </header>
        <GameRules action={() => {}} />
        <section aria-label="Spilområde">
          <div className="dice-container dealer-styling">
            <span className="dealer-container">
              <img src={heisenbergImg} alt="Heisenberg (dealeren)" />
              <h3>dealers dice</h3>
            </span>
            <Dice diceSide={dealerDiceSide} type="dealerDice" rolling={diceThrown} />
          </div>
          <div className="dice-container">
            <h3>players dice</h3>
            <Dice diceSide={playerDiceSide} rolling={diceThrown} />
            <Button gameOver={gameOver} throwing={diceThrown} action={handleDiceThrow}  text="rock'n'roll" />
            {canStand ? (
              <Button
                gameOver={gameOver}
                action={handlePlayerStand}
                text="Stand"
              />
            ) : null}
          </div>
        </section>
        {gameOver ? (
          <GameOver
            action={handleResetGame}
            dealerWon={dealerWon}
            playerWon={playerWon}
          />
        ) : null}
      </GameBoard>
      {/* <PlayerCard /> */}
      <PlayerVsDealer userScore={playerScore} dealerScore={dealerScore} />

      {cookieConsent === null && (
        <div
          role="dialog"
          aria-label="Cookie-samtykke"
          style={{
            position: "fixed",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            background: "rgba(0,0,0,0.9)",
            color: "#fff",
            padding: "16px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <p style={{ margin: 0, flex: "1 1 320px" }}>
            Vi bruger cookies til statistik (Google Analytics). Vælg “Accepter” for at aktivere, eller “Afvis” for at fortsætte uden.
          </p>
          <div style={{ display: "flex", gap: "8px" }}>
            <button type="button" onClick={rejectCookies} style={{ padding: "8px 12px" }}>
              Afvis
            </button>
            <button
              type="button"
              onClick={acceptCookies}
              style={{ padding: "8px 12px", background: "darkgreen", color: "#fff", border: 0 }}
            >
              Accepter
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
