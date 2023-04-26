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
import LogoutIcon from "@mui/icons-material/Logout";

const Item = ({ title, icon, badge }) => {
  return (
    <MenuItem sx={{ mt: 0.8 }}>
      <ListItemIcon style={{ color: "#9e9e9e" }}>{icon}</ListItemIcon>
      <Typography variant="body2" color="#9e9e9e">
        {title}
      </Typography>
      {badge && badge}
    </MenuItem>
  );
};

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
      <Box mt="35px">
        <MenuList>
          <Item title="Home" icon={<HomeIcon />} />
          <Item title="Projects" icon={<ArticleIcon />} />
          <Item title="Dashboard" icon={<WindowIcon />} />
          <Item
            title="Messages"
            icon={<ForumIcon />}
            badge={
              <Badge badgeContent="06" sx={{ pl: 5 }} color="error"></Badge>
            }
          />
          <Item title="Documents" icon={<SourceIcon />} />
          <Item title="Organizations" icon={<CorporateFareIcon />} />
          <Item title="Settings" icon={<SettingsIcon />} />
        </MenuList>
      </Box>
      <Box position="absolute" bottom="100px">
        <Item
          title="Logout"
          icon={<LogoutIcon />}
          sx={{ position: "absolute", bottom: "10px" }}
        />
      </Box>
    </div>
  );
};

export default Siderbar;
