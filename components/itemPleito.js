import { useState, useEffect, Fragment } from "react";

import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";

export default function AlignItemsList(props) {
  const [date, setDate] = useState("inline");
  const [winner, setWinner] = useState("none");
  const [button, setButton] = useState("VOTAR");
  const [link, setLink] = useState("/votar");
  useEffect(() => {
    if (props.done) {
      setDate("none");
      setWinner("inline");
      setButton("VER MAIS");
      setLink("/pleito");
    }
  }, [props.done]);

  return (
    <Fragment>
      <List sx={{ width: "100%" }}>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary={
              <Fragment>
                <Typography
                  sx={{ display: "inline", fontWeight: "bold" }}
                  color="text.primary"
                >
                  ELEIÇÃO COLÉGIO ESTUDANTIL
                </Typography>
                <Typography
                  sx={{ display: `${date}`, fontWeight: "bold", marginLeft: 2 }}
                  color="primary.main"
                  variant="subtitle2"
                >
                  20-05-2000 - 25-05-2000
                </Typography>
              </Fragment>
            }
            secondary={
              <Fragment>
                <Typography
                  sx={{ display: `${winner}`, fontWeight: "bold" }}
                  component="span"
                  variant="overline"
                  color="text.secundary"
                >
                  VENCEDOR:
                </Typography>

                <Typography
                  sx={{ display: `${winner}`, fontWeight: "bold" }}
                  component="span"
                  variant="subtitle1"
                  color="primary.main"
                >
                  CANDIDATO 01
                </Typography>
              </Fragment>
            }
          />
          <Button edge="end" variant="contained" href={`${link}`}>
            {`${button}`}
          </Button>
        </ListItem>
        <Divider component="li" />
      </List>
    </Fragment>
  );
}
