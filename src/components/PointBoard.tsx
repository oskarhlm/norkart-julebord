import { TeamChip } from "@components/TeamChip";
import { Box, Paper, Slide, styled, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import clsx from "clsx";
import { useEffect, useState } from "react";

const Panel = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  color: theme.palette.primary.dark,
  aspectRatio: 16 / 10,
  width: "12vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& .MuiTypography-root": {
    fontWeight: 700,
    fontSize: "5vw",

    "&.number": {
      fontSize: "5vw",
    },
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  "&.highlighted": {
    "& .MuiPaper-root": {
      boxShadow: `inset 0 0 0 .8vw ${theme.palette.primary.dark}`,
    },
  },
}));

interface Props {
  score: number;
  teamName: string;
  highlighted?: boolean;
}

export const PointBoard = ({ score, teamName, highlighted }: Props) => {
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    setChecked(!checked);
  }, [score]);

  return (
    <Stack alignItems="center" gap={4}>
      <StyledBox className={clsx(highlighted && "highlighted")}>
        {!checked && (
          <Slide direction="up" in={!checked} mountOnEnter unmountOnExit>
            <Panel>
              <Typography>{score}</Typography>
            </Panel>
          </Slide>
        )}
        {checked && (
          <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
            <Panel>
              <Typography>{score}</Typography>
            </Panel>
          </Slide>
        )}
      </StyledBox>
      <TeamChip sx={{ width: "fit-content" }}>{teamName}</TeamChip>
    </Stack>
  );
};
