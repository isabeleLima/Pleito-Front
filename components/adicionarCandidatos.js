import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import ItemCandidato from "./itemCandidato";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#EAF2CE",
  boxShadow: 24,
  p: 4,
};

export default function AddCandidato(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [checked, setChecked] = useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div>
      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={handleOpen}
      >
        ADICIONAR CANDIDATOS
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <List
            sx={{
              width: "100%",
              bgcolor: "main.contrastText",
              position: "relative",
              overflow: "auto",
              maxHeight: 500,
              "& ul": { padding: 0 },
            }}
          >
            {[0, 1, 2, 3, 4].map((sectionId) => (
              <ListItem
                key={sectionId}
                secondaryAction={
                  <Checkbox
                    edge="end"
                    onChange={handleToggle(sectionId)}
                    checked={checked.indexOf(sectionId) !== -1}
                    inputProps={{ "aria-labelledby": sectionId }}
                  />
                }
                disablePadding
              >
                <ListItemButton>
                  <ItemCandidato id={sectionId}></ItemCandidato>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleClose}
          >
            ADICIONAR CANDIDATOS
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
