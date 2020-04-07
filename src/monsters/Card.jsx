import React from "react";
import { Paper, makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(8),
    textAlign: "center",
    color: theme.palette.text.primary,
    height: 300,
    margin: 25,
    background: "#303f9f",
    transition: "transform 0.25s ease-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
}));

function Card(props) {
  const classes = useStyles();

  return (
    <div>
      <Grid item>
        <Paper className={classes.paper}>
          <img
            src={`https://robohash.org/${props.monster}rf?set=set2`}
            alt="monster"
          />{" "}
        {props.children}
        </Paper>
      </Grid>
    </div>
  );
}

export default Card;
