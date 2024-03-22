import {
  AppBar,
  Box,
  IconButton,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";

export interface NavBarProps {
  handleDarkMode: any;
  isDarkMode: boolean;
}

// TODO: Make these part of a Redux Store possibly?
const NavBar = ({ handleDarkMode, isDarkMode }: NavBarProps) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <IconButton color="inherit" href="/" sx={{ flexGrow: 0.2 }}>
              Home
            </IconButton>
            <IconButton color="inherit" href="/movies" sx={{ flexGrow: 0.2 }}>
              Movies
            </IconButton>
            <Typography
              variant="body1"
              gutterBottom
              textAlign="center"
              sx={{ flexGrow: 0.5 }}
            >
              Dark Mode?
              <Switch
                checked={isDarkMode}
                onChange={() => handleDarkMode(!isDarkMode)}
                name="theme_mode"
                color="primary"
              />
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
