import { ButtonBase, styled } from "@mui/material";

export const TeamChip = styled(ButtonBase)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.secondary.main,
  color: "#000",
  paddingBlock: ".8vw",
  paddingInline: "1.5vw",
  minHeight: "40px",
  maxWidth: "500px",
  borderRadius: "20px",
  fontWeight: 600,
  fontSize: "1.2vw",
  textWrap: "wrap",
  boxShadow: theme.shadows[4],
}));
