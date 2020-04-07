import React from "react";
import { TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  color: {
    background: 'white'
  }
}));

const SearchBox = ({ hendleChange }) => {

  const classes = useStyles();

  return (

    <form className={classes.root} noValidate >
      <TextField
      className={classes.color}
      type='search'
        id="filled-basic"
        label="Search monster"
        variant="filled"
        onChange={hendleChange}
      />
    </form>

  );
};

export default SearchBox;

