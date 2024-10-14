import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import logo from "./imagens/LOGOHOME.png";

export default function Navbar() {
  const [auth, setAuth] = React.useState(true);
  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);
  const [accountAnchorEl, setAccountAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleAccountMenuOpen = (event) => {
    setAccountAnchorEl(event.currentTarget);
  };

  const handleAccountMenuClose = () => {
    setAccountAnchorEl(null);
  };

  const handleNotificationClick = () => {
    return null;
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#1a1a1e" }}>
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: "Plus Jakarta Sans",
              marginLeft: "2%",
            }}
          >
            CODELINGU
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleNotificationClick}
                sx={{
                  color: "white",
                  width: "30%",
                  height: "30%",
                  marginLeft: "2%",
                  marginRight: "2%",
                }}
              >
                <NotificationsIcon fontSize="1px" />
              </IconButton>

              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleAccountMenuOpen}
                sx={{
                  color: "white",
                  width: "40%",
                  height: "40%",
                  marginLeft: "2%",
                  marginRight: "2%",
                }}
              >
                <AccountCircle fontSize="18px" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={accountAnchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(accountAnchorEl)}
                onClose={handleAccountMenuClose}
              >
                <MenuItem onClick={handleAccountMenuClose}>Perfil</MenuItem>
                <MenuItem onClick={handleAccountMenuClose}>
                  Minha conta
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
