import { PropsWithChildren, ReactNode, useState } from "react";
import {
  Box,
  Button,
  Stack,
  styled,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { ScoreAssigner } from "@components/ScoreAssigner";
import { useNavigate } from "react-router-dom";
import { InterludeModal } from "@components/InterludeModal";

const NUM_STARS = 100;

const Star = styled(Box)(({ theme }) => {
  const xPos = Math.random();
  const yPos = Math.random();

  return {
    position: "absolute",
    top: `calc(100vh * ${yPos})`,
    left: `calc(100vw * ${xPos})`,
    width: "8px",
    height: "8px",
    borderRadius: "4px",
    backgroundColor: theme.palette.secondary.main,
  };
});

const starComponents: ReactNode[] = Array(NUM_STARS).fill(
  <Star className="star" />
);

export const MainLayout = ({ children }: PropsWithChildren) => {
  const [scoresOpen, setScoresOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (event: React.MouseEvent<HTMLElement>, path: any) => {
    navigate(path[0]);
  };

  return (
    <Stack
      position="relative"
      alignItems="center"
      justifyContent="space-evenly"
      width="100vw"
      height="100vh"
      bgcolor="#d08ff7"
      sx={{
        "& *:not(.star)": {
          zIndex: 1,
        },
      }}
    >
      <InterludeModal />
      <ToggleButtonGroup
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
        }}
        onChange={handleNavigate}
      >
        <ToggleButton value="/">1</ToggleButton>
        <ToggleButton value="/word-game?sequence=0">2</ToggleButton>
        <ToggleButton value="/word-game?sequence=1">3</ToggleButton>
        <ToggleButton value="/oversettelsesgalskap">4</ToggleButton>
        <ToggleButton value="/medley">5</ToggleButton>
        <ToggleButton value="/cover-låter">6</ToggleButton>
        <ToggleButton value="/instruments-game">7</ToggleButton>
        <ToggleButton value="/grab-the-mic">8</ToggleButton>
      </ToggleButtonGroup>
      {children}
      {starComponents}
      <Box position="absolute" bottom={10}>
        <Button onClick={() => setScoresOpen(true)}>pointz</Button>
        <ScoreAssigner open={scoresOpen} onClose={() => setScoresOpen(false)} />
      </Box>
    </Stack>
  );
};
