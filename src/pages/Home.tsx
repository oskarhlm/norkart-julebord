import BfBSal from "@assets/bfb_sal.png";
import { BfbButton } from "@components/BfbButton";
import { InterludeModal } from "@components/InterludeModal";
import { TeamChip } from "@components/TeamChip";
import { useKeyPress } from "@hooks/useKeyPress";
import {
  Box,
  Button,
  Chip,
  Paper,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useGames } from "@state/gamesContext";
import { useTeams } from "@state/teamsContext";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const theme = useTheme();
  const { teams, addTeam, removeTeam, clearTeams } = useTeams();
  const { startFirstGame } = useGames();

  const [teamName, setTeamName] = useState<string>("");
  const isError = teams.find((team) => team.name === teamName) !== undefined;

  return (
    <Stack
      position="relative"
      width="100vw"
      height="100vh"
      sx={{ "& *:not(img)": { zIndex: 1 } }}
      justifyContent="center"
      alignItems="center"
    >
      <InterludeModal />
      <Box
        component="img"
        src={BfBSal}
        alt=""
        position="absolute"
        width="100vw"
        height="100vh"
        sx={{ objectFit: "fill" }}
        display="flex"
      />
      <Paper
        sx={{ padding: "2vw", backgroundColor: theme.palette.primary.light }}
      >
        <Typography variant="h3" mb="2vw">
          Velkommen til <b>Beat for Beat</b>!
        </Typography>
        <Box
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            if (isError) return;
            addTeam({ name: teamName, score: 0 });
            setTeamName("");
          }}
          marginBottom="2vw"
        >
          <TextField
            autoFocus
            error={isError}
            label="Lagnavn"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
        </Box>
        <Stack
          direction="row"
          flexWrap="wrap"
          gap={2}
          mb="2vw"
          justifyContent="center"
        >
          {teams.map((team) => (
            <TeamChip key={team.name} onClick={() => removeTeam(team.name)}>
              {team.name}
            </TeamChip>
          ))}
        </Stack>
        <Stack direction="row" gap="1vw" justifyContent="center">
          <BfbButton
            onClick={startFirstGame}
            component={Link}
            to="/word-game?sequence=0"
            sx={{ fontSize: "2vw" }}
          >
            Start!
          </BfbButton>
          <BfbButton
            secondary
            disabled={teams.length === 0}
            onClick={clearTeams}
            sx={{ fontSize: "1vw" }}
          >
            Fjern alle
          </BfbButton>
        </Stack>
      </Paper>
    </Stack>
  );
};
