import React from "react";
import { Grid, Divider } from "@material-ui/core";
import Card from "./Card";
import uuid from 'react-uuid'

const CardList = (props) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2} >
          {props.monsters.map((monster) => (
            <Card monster={monster.id} key={uuid()}>
              <Divider /> {monster.name} <Divider />
            </Card>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CardList;
