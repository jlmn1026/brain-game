import { GameConfig } from "./memoNumbers";

export const selectGameConfig = (currentConfig: GameConfig): GameConfig => {
  if (currentConfig.playCount < 6) {
    return {
      ...currentConfig,
      playCount: currentConfig.playCount + 1,
      displaySeconds: (200 - 25 * currentConfig.playCount) / 100,
    };
  }

  return {
    digits: currentConfig.digits + 1,
    displaySeconds: 2,
    playCount: 0,
  };
};
