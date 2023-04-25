import React from "react";
import styles from "./Sidebar.module.css";
import { Box, IconButton, Typography } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import kyroLogo from "../../assets/kyro_logo.png";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import WindowIcon from "@mui/icons-material/Window";
import ForumIcon from "@mui/icons-material/Forum";
import Badge from "@mui/material/Badge";
import SourceIcon from "@mui/icons-material/Source";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import SettingsIcon from "@mui/icons-material/Settings";

const Siderbar = () => {
  return (
    <div className={styles.Sidebar}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        ml="15px"
      >
        <img
          alt="kyro-logo"
          width="100px"
          src={kyroLogo}
          style={{ cursor: "pointer" }}
        />
        <IconButton>
          <MenuOutlinedIcon />
        </IconButton>
      </Box>
      <Box>
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <Typography variant="body2" color="text.secondary">
              Home
            </Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <ArticleIcon></ArticleIcon>
            </ListItemIcon>
            <Typography variant="body2" color="text.secondary">
              Projects
            </Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <WindowIcon></WindowIcon>
            </ListItemIcon>
            <Typography variant="body2" color="text.secondary">
              Dashboard
            </Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <ForumIcon></ForumIcon>
            </ListItemIcon>
            <Typography variant="body2" color="text.secondary">
              Messages
            </Typography>
            <Badge badgeContent="06" sx={{ pl: 5 }} color="error"></Badge>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <SourceIcon></SourceIcon>
            </ListItemIcon>
            <Typography variant="body2" color="text.secondary">
              Documents
            </Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <CorporateFareIcon></CorporateFareIcon>
            </ListItemIcon>
            <Typography variant="body2" color="text.secondary">
              Organizations
            </Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <SettingsIcon></SettingsIcon>
            </ListItemIcon>
            <Typography variant="body2" color="text.secondary">
              Settings
            </Typography>
          </MenuItem>
        </MenuList>
      </Box>
    </div>
  );
};

export default Siderbar;
