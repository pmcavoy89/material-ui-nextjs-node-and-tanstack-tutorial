import { ThemeOptions } from "@mui/material";

const theme = ({ isDarkMode }: { isDarkMode: boolean }): ThemeOptions => ({
  palette: {
    mode: isDarkMode ? "dark" : "light",
    primary: {
      main: "#00ff00",
    },
    secondary: {
      main: "#f50057",
    },
    text: {
      primary: "#00ff00",
    },
  },
});

export default theme;
