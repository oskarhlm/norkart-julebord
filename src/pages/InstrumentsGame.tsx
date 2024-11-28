import { Box, Stack } from "@mui/system";
import { MainLayout } from "../MainLayout";
import { Divider, Typography } from "@mui/material";
import { useState } from "react";
import { useKeyPress } from "@hooks/useKeyPress";
import BfB_Piano1 from "@assets/bfb_piano1.avif";
import BfB_Piano2 from "@assets/bfb_piano2.avif";

const INSTRUMENT_LEVELS = [
  "🎸 Bass og gitar",
  "🥁 Trommer og perkusjon",
  "🎺 Brass",
  "🎻🎤 Strykere + vokal",
];

export const InstrumentsGame = () => {
  const [numInstruments, setNumInstruments] = useState(-1);

  useKeyPress(["ArrowUp"], () => {
    setNumInstruments((prev) => prev + 1);
  });

  useKeyPress(["ArrowDown"], () => {
    setNumInstruments((prev) => Math.max(prev - 1, -1));
  });

  return (
    <MainLayout>
      <Box
        component="img"
        src={BfB_Piano1}
        alt="bfb"
        width="25vw"
        position="absolute"
        left={0}
        bottom={0}
      />
      <Box
        component="img"
        src={BfB_Piano2}
        alt="bfb"
        width="25vw"
        position="absolute"
        right={0}
        bottom={0}
      />
      <Typography variant="h2">Instrument for instrument 🎺🎤🪗🎹</Typography>
      <Stack divider={<Divider />} gap={8} direction="column-reverse">
        {INSTRUMENT_LEVELS.map((instr, index) =>
          index <= numInstruments ? (
            <Typography variant="h3">{instr}</Typography>
          ) : (
            <Box height="72px" />
          )
        )}
      </Stack>
    </MainLayout>
  );
};
