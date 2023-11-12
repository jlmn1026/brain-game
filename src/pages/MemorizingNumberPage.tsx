import CommonContainer from "@/common-ui/CommonContainer";
import { useCallback, useState } from "react";
import { displayNumberBox, pageContent } from "./memorizingNumber.css";
import InputNumberButton from "@/features/memoNumbers/InputNumberButton";
import { GameConfig } from "@/features/memoNumbers/memoNumbers";
import { selectGameConfig } from "@/features/memoNumbers/selectGameConfig";

const MemorizingNumberPage = () => {
  const [gameConfig, setGameConfig] = useState<GameConfig>({
    digits: 4,
    displaySeconds: 2,
    playCount: 0,
  });
  const [inputNumber, setInputNumber] = useState<string>("");

  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [showNumber, setShowNumber] = useState<boolean>(false);

  const [displayNumber, setDisplayNumber] = useState<string>("");

  const gamePlay = useCallback(() => {
    setGameConfig(selectGameConfig(gameConfig));
    setInputNumber("");
    setDisplayNumber(
      Array.from({ length: gameConfig.digits })
        .map(() => String(Math.floor(Math.random() * 10)))
        .join("")
    );
    setTimeout(() => {
      setShowNumber(false);
    }, gameConfig.displaySeconds * 1000);
    setGameStarted(true);
    setShowNumber(true);
  }, [gameConfig]);

  return (
    <CommonContainer>
      <main className={pageContent}>
        <h1>Memorizing Number</h1>

        {!displayNumber && (
          <button
            onClick={async () => {
              gamePlay();
            }}
          >
            Game Start
          </button>
        )}
        {gameStarted && (
          <>
            <div style={{ height: "40px", margin: "10px 0px" }}>
              <div className={displayNumberBox}>
                {showNumber ? displayNumber : inputNumber}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                width: "300px",
                flexWrap: "wrap",
              }}
            >
              {Array.from({ length: 9 }).map((_, index) => {
                return (
                  <InputNumberButton
                    inputNumber={index + 1}
                    onClick={() => {
                      if (inputNumber.length === gameConfig.digits) {
                        return;
                      }
                      setInputNumber(inputNumber + String(index + 1));
                    }}
                  />
                );
              })}
              <InputNumberButton
                inputNumber={0}
                onClick={() => {
                  if (inputNumber.length === gameConfig.digits) {
                    return;
                  }
                  setInputNumber(inputNumber + String(0));
                }}
              />
              <button
                onClick={() => {
                  if (inputNumber === displayNumber) {
                    alert("Correct!");
                    setTimeout(() => {
                      gamePlay();
                    }, 1500);
                  } else {
                    alert("Wrong!");
                  }
                }}
                style={{ width: "200px", fontSize: "30px" }}
              >
                Confirm
              </button>
            </div>
          </>
        )}
      </main>
    </CommonContainer>
  );
};

export default MemorizingNumberPage;
