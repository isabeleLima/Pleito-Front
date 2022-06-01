import { useState, useEffect, Fragment } from "react";

import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";


export default function ItemCandidato(props) {
const [remove, setRemove] = useState("none");
const [vote, setVote] = useState("none");
  useEffect(() => {
    if (props.remove) {
      setRemove("inline")
    }else if(props.vote){
      setVote("inline")
    }
  }, [props.remove, props.vote]);

  return (
    <Fragment>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={
            <Fragment>
              <Typography
                sx={{ display: "inline", fontWeight: "bold" }}
                color="text.primary"
              >
                CANDIDATO 01  
              </Typography>
            </Fragment>
          }
          secondary={
            <Fragment>
              <Typography
                sx={{ display: "inline", fontWeight: "bold" }}
                component="span"
                variant="overline"
                color="text.secundary"
              >
               DATA NASC: 00-00-0000
              </Typography>
              
              <Typography
                sx={{ display: "inline", fontWeight: "bold" }}
                component="span"
                variant="overline"
                color="text.secundary"
              >
                CPF: 000.000.000-00
              </Typography>
            </Fragment>
          }
          
        />
        <Button sx={{ display: `${remove}`}} edge='end' variant="contained" href="#" color="error">
            REMOVER
        </Button>
        <Button sx={{ display: `${vote}`}} edge='end' variant="contained" href="#" >
            VOTAR
        </Button>
      </ListItem>
      <Divider component="li" />
    </Fragment>
  );
}
