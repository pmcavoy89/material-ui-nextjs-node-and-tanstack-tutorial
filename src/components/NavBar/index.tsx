import { AppBar, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => (
  <>
    <AppBar position="fixed">
      <Toolbar variant="dense">
        <IconButton color="inherit" href="/">
          Home
        </IconButton>
        <IconButton color="inherit" href="/movies">
          Movies
        </IconButton>
      </Toolbar>
    </AppBar>
    <Toolbar />
  </>
);

export default NavBar;
