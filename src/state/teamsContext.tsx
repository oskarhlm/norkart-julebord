import {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
  useEffect,
} from "react";

type Team = {
  name: string;
  score: number;
};

const TeamsContext = createContext<{
  teams: Team[];
  addTeam: (team: Team) => void;
  removeTeam: (teamName: string) => void;
  clearTeams: () => void;
  incrementScore: (teamName: string) => void;
  decrementScore: (teamName: string) => void;
}>({
  teams: [],
  addTeam: () => {},
  removeTeam: () => {},
  clearTeams: () => {},
  incrementScore: () => {},
  decrementScore: () => {},
});

export const useTeams = () => {
  return useContext(TeamsContext);
};

export const TeamsContextProvider = ({ children }: PropsWithChildren) => {
  const [teams, setTeams] = useState<Team[]>(() => {
    const storedTeams = sessionStorage.getItem("teams");
    return storedTeams ? JSON.parse(storedTeams) : [];
  });

  const addTeam = (team: Team) => {
    const newTeams = [...teams, team];
    setTeams(newTeams);
    sessionStorage.setItem("teams", JSON.stringify(newTeams));
  };

  const removeTeam = (teamName: string) => {
    setTeams(teams.filter((team) => team.name !== teamName));
  };

  const clearTeams = () => setTeams([]);

  const incrementScore = (teamName: string) => {
    setTeams(
      teams.map((team) => {
        if (team.name === teamName) {
          console.log(team.name, { ...team, score: team.score + 1 });
          return { ...team, score: team.score + 1 };
        }

        return team;
      })
    );
  };

  const decrementScore = (teamName: string) => {
    setTeams(
      teams.map((team) => {
        if (team.name === teamName) {
          console.log(team.name, { ...team, score: team.score - 1 });
          return { ...team, score: team.score - 1 };
        }

        return team;
      })
    );
  };

  useEffect(() => {
    sessionStorage.setItem("teams", JSON.stringify(teams));
  }, [teams]);

  return (
    <TeamsContext.Provider
      value={{
        teams,
        addTeam,
        removeTeam,
        clearTeams,
        incrementScore,
        decrementScore,
      }}
    >
      {children}
    </TeamsContext.Provider>
  );
};
