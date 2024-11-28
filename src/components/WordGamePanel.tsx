import { Box, Grid2, styled, Typography } from "@mui/material";
import clsx from "clsx";

const Panel = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.dark,
  aspectRatio: 16 / 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "&.is-red": {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },

  "& .MuiTypography-root": {
    fontWeight: 700,
    fontSize: "2.5vw",

    "&.number": {
      fontSize: "5vw",
    },
  },
}));

export type Word = {
  value: string;
  isRed: boolean;
  visible?: boolean;
};

interface Props {
  words: Word[];
}

export const WordGamePanel = ({ words }: Props) => {
  return (
    <Grid2
      container
      columns={words.length * 2}
      spacing={2}
      width="80vw"
      padding={2}
      bgcolor={(theme) => theme.palette.primary.dark}
    >
      {words.map((word, index) => (
        <Grid2 key={index} size={2}>
          <Panel className={clsx(word.isRed && word.visible && "is-red")}>
            <Typography
              className={clsx(!Boolean(word.visible) && "number")}
              variant="h4"
              textTransform="uppercase"
            >
              {word.visible ? word.value : index + 1}
            </Typography>
          </Panel>
        </Grid2>
      ))}
    </Grid2>
  );
};
