import {
  List,
  ListItem,
  ListItemIcon,
  Typography,
  Collapse,
} from "@mui/material";
import * as React from "react";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import LockIcon from "@mui/icons-material/Lock";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FestivalIcon from "@mui/icons-material/Festival";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { Link } from "react-router-dom";
import store from "../redux/store";

function ItemSidebar() {
  return (
    <List>
      <ListItem button component={Link} to="/home">
        <ListItemIcon>
          <HomeIcon color="primary" titleAccess="หน้าหลัก" />
        </ListItemIcon>
        <ListItemText
          sx={{ ml: -2, my: -1 }}
          primary={
            <Typography
              sx={{ mt: 0.5, fontWeight: "bold" }}
              variant="subtitle2"
            >
              หน้าหลัก
            </Typography>
          }
        />
      </ListItem>
      <ListItem button component={Link} to="/password">
        <ListItemIcon>
          <LockIcon color="primary" titleAccess="เปลี่ยนรหัสผ่าน" />
        </ListItemIcon>
        <ListItemText
          sx={{ ml: -2, my: -1 }}
          primary={
            <Typography
              sx={{ mt: 0.5, fontWeight: "bold" }}
              variant="subtitle2"
            >
              เปลี่ยนรหัสผ่าน
            </Typography>
          }
        />
      </ListItem>
    </List>
  );
}

export default ItemSidebar;
