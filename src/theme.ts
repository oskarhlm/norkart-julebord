import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#01368a",
      dark: "#01368a",
      light: "#72e3f7",
    },
    secondary: {
      main: "#edbe02",
    },
    error: {
      main: "#bf021b",
      contrastText: "#fff",
    },
  },
});
