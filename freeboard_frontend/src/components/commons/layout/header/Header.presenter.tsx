import { Header, Coffee, Icons } from "./Header.styles";
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import SearchIcon from "@mui/icons-material/Search";

const theme = createTheme({
  palette: {
    secondary: {
      // This is green.A700 as hex.
      main: "#ffffff",
    },
  },
});

export default function HeaderUI() {
  return (
    <>
      <Header>
        <Coffee src="/images/coffeelogo.jpg" />
        <ThemeProvider theme={theme}>
          <Button color="secondary">Home</Button>
          <Button color="secondary">About</Button>
          <Button color="secondary">Menu</Button>
          <Button color="secondary">Review</Button>
          <Button color="secondary">Contact</Button>
        </ThemeProvider>
        <Icons>
          <Button>
            <LoginIcon color="secondary" />
          </Button>
          <Button>
            <SearchIcon color="secondary" />
          </Button>
        </Icons>
      </Header>
    </>
  );
}
