import { createContext, PropsWithChildren, useContext, useState } from "react";

export const GAMES = ["word-game", "anagram", "stems"];

const GamesContext = createContext<{
  allGames: string[];
  currentGame: string | null;
  nextGame: () => string | null;
  startFirstGame: () => void;
}>({
  allGames: GAMES,
  currentGame: null,
  nextGame: () => null,
  startFirstGame: () => {},
});

export const useGames = () => {
  return useContext(GamesContext);
};

export const GamesContextProvider = ({ children }: PropsWithChildren) => {
  const [currentGame, setCurrentGame] = useState<string | null>(
    sessionStorage.getItem("currentGame")
  );

  const nextGame = () => {
    if (!currentGame) {
      setCurrentGame(GAMES[0]);
      sessionStorage.setItem("currentGame", GAMES[0]);
      return GAMES[0];
    }

    const currentGameIndex = GAMES.indexOf(currentGame);
    if (currentGameIndex === GAMES.length - 1) {
      return null;
    }

    setCurrentGame(GAMES[currentGameIndex + 1]);
    sessionStorage.setItem("currentGame", GAMES[currentGameIndex + 1]);
    return GAMES[currentGameIndex + 1];
  };

  const startFirstGame = () => {
    setCurrentGame(GAMES[0]);
    sessionStorage.setItem("currentGame", GAMES[0]);
  };

  return (
    <GamesContext.Provider
      value={{ ...useGames(), currentGame, nextGame, startFirstGame }}
    >
      {children}
    </GamesContext.Provider>
  );
};
