import React from "react";
import { Paper, makeStyles, Grid } from "@material-ui/core";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

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
      cursor: "pointer",
    },
  },
}));

function Card(props) {
  function openPopupbox() {
    const content = (
      <img
        src={`https://robohash.org/${props.monster}rf?set=set2`}
        alt="monster"
      />
    );

    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: `${props.name}`,
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  }

  const classes = useStyles();

  return (
    <div onClick={openPopupbox}>
      <PopupboxContainer style={{background:'#b71c1c'}} />



      <Grid item  >
        <Paper className={classes.paper}>
          <img
            src={`https://robohash.org/${props.monster}rf?set=set2`}
            alt="monster"
          />
          {props.children}
        </Paper>
      </Grid>

    </div>
  );
}

export default Card;
