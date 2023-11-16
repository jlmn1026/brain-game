import CommonContainer from "@/common-ui/CommonContainer";
import { useCallback, useState } from "react";
import { displayNumberBox, pageContent } from "./memorizingNumber.css";
import InputNumberButton from "@/features/memoNumbers/InputNumberButton";
import { GameConfig } from "@/features/memoNumbers/memoNumbers";
import { selectGameConfig } from "@/features/memoNumbers/selectGameConfig";

const MemorizingNumberPage = () => {
  const [gameConfig, setGameConfig] = useState<GameConfig>({
    digits: 8,
    displaySeconds: 2,
    playCount: 0,
  });
  const [inputNumber, setInputNumber] = useState<string>("");
  const [explanation, setExplanation] = useState<string>("");

  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [showNumber, setShowNumber] = useState<boolean>(false);

  const [displayNumber, setDisplayNumber] = useState<string>("");

  const displayExplanation = useCallback((text: string) => {
    setExplanation(text);
    // setTimeout(() => {
    //   setExplanation("");
    // }, 750);
  }, []);

  const gamePlay = useCallback(() => {
    setGameConfig(selectGameConfig(gameConfig));
    setInputNumber("");
    displayExplanation("Ready...");
    setGameStarted(true);

    setTimeout(() => {
      displayExplanation("Go!");

      setDisplayNumber(
        Array.from({ length: gameConfig.digits })
          .map(() => String(Math.floor(Math.random() * 10)))
          .join("")
      );
      setTimeout(() => {
        setShowNumber(false);
        displayExplanation("");
      }, gameConfig.displaySeconds * 1000);

      setShowNumber(true);
    }, 1000);
  }, [displayExplanation, gameConfig]);

  return (
    <CommonContainer>
      <main className={pageContent}>
        <h1>数字 を 暗記</h1>

        {!gameStarted && (
          <button
            style={{
              width: "200px",
              height: "100px",
              fontSize: "30px",
            }}
            onClick={async () => {
              gamePlay();
            }}
          >
            Game Start
          </button>
        )}
        {/* TODO: コンポーネント分離 */}
        {gameStarted && (
          <>
            <div
              style={{
                height: "80px",
                width: "400px",
                margin: "10px 0px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div className={displayNumberBox}>{explanation}</div>
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
                    displayExplanation("Correct!");
                    setTimeout(() => {
                      gamePlay();
                    }, 1500);
                  } else {
                    displayExplanation("Wrong!");
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
