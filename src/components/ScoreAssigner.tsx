import { useTeams } from "@state/teamsContext";
import { PointBoard } from "./PointBoard";
import { useKeyPress } from "@hooks/useKeyPress";
import { useState } from "react";
import { Stack } from "@mui/system";
import { Modal, ModalProps, styled } from "@mui/material";

const StyledStack = styled(Stack)(({ theme }) => ({
  position: "absolute",
  width: "60vw",
  flexWrap: "wrap",
  justifyContent: "space-between",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: theme.palette.primary.light,
  padding: 40,
  overflow: "hidden",
}));

export const ScoreAssigner = (props: Omit<ModalProps, "children">) => {
  const { teams, incrementScore, decrementScore } = useTeams();
  const [highlightedTeam, setHighlightedTeam] = useState<string | undefined>();

  // const { currentGame, nextGame } = useGames();

  const highlightedTeamIndex = teams.indexOf(
    teams.find((team) => team.name === highlightedTeam)!
  );

  useKeyPress(
    ["+", "ArrowUp"],
    () => highlightedTeam && incrementScore(highlightedTeam)
  );
  useKeyPress(
    ["-", "ArrowDown"],
    () => highlightedTeam && decrementScore(highlightedTeam)
  );
  useKeyPress(["ArrowRight"], () =>
    setHighlightedTeam(
      teams[Math.min(highlightedTeamIndex + 1, teams.length - 1)].name
    )
  );
  useKeyPress(["ArrowLeft"], () => {
    if (highlightedTeamIndex <= 0) {
      setHighlightedTeam(undefined);
      return;
    }

    setHighlightedTeam(teams[Math.max(highlightedTeamIndex - 1, -1)].name);
  });

  return (
    <Modal {...props}>
      <StyledStack direction="row" gap="4vw">
        {teams.map((team) => (
          <PointBoard
            score={team.score}
            teamName={team.name}
            highlighted={team.name === highlightedTeam}
          />
        ))}
      </StyledStack>
      {/* {currentGame !== GAMES[-1] && (
          <BfbButton
            onClick={() => {
              const path = nextGame();
              if (!path) return;
              navigate(`/${path}`);
            }}
            endIcon={<ArrowRight />}
          >
            Gå til neste spill
          </BfbButton>
        )} */}
    </Modal>
  );
};
