import { Box, Stack, Typography } from "@mui/material";
import { MainLayout } from "../MainLayout";
import BfB from "@assets/bfb_programleder.avif";
import BfB_Piano1 from "@assets/bfb_piano1.avif";
import BfB_Piano2 from "@assets/bfb_piano2.avif";

export const TitleLayout = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
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
      <Stack gap={10}>
        <Typography variant="h1">{title}</Typography>
        {description && <Typography variant="h2">{description}</Typography>}
        <Box component="img" src={BfB} alt="bfb" />
      </Stack>
    </MainLayout>
  );
};
