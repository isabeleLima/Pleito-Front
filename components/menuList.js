import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import AddBoxIcon from "@mui/icons-material/AddBox";
import Link from "@mui/material/Link";

export const mainListItems = (
  <>
    <>
      <Link href="/dashboard" underline="none">
        <ListItemButton>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </Link>
    </>
    <>
      <Link href="/pleitosAbertos" underline="none">
        <ListItemButton>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Pleitos Abertos" />
        </ListItemButton>
      </Link>
    </>
    <Link href="/adicionarPleito" underline="none">
      <ListItemButton>
        <ListItemIcon>
          <AddBoxIcon />
        </ListItemIcon>
        <ListItemText primary="Adicionar Pleitos" />
      </ListItemButton>
    </Link>
    <Link href="/" underline="none">
      <ListItemButton>
        <ListItemIcon>
          <DisabledByDefaultIcon />
        </ListItemIcon>
        <ListItemText primary="Sair" />
      </ListItemButton>
    </Link>
  </>
);
