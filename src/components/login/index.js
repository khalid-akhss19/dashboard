import { Box, makeStyles, Typography } from "@material-ui/core";
import TextField from "../input";
import React from "react";
import Buttons from "../buttons";
import CheckboxLabels from "../checkbox";
import { Link } from "react-router-dom";

export default function LoginSection() {
  const classes = useStyles();
  return (
    <Box mb={10} className={classes.mainContainer}>
      <Box pt={5} pb={1}>
        <Typography className={classes.typo} variant="body1">
          {" "}
          hello! lets get started
        </Typography>
      </Box>
      <Box pt={6} pb={2}>
        <TextField variant="outlined" placeholder="UserName" />
      </Box>
      <Box pt={2} pb={3}>
        <TextField variant="outlined" placeholder="Passworda" />
      </Box>
      <Box mt={3}>
        <Link to="/dashboard">
          <Buttons className={classes.ButtonSignin} variant="signIn">
            sign in
          </Buttons>
        </Link>
      </Box>
      <Box mt={3}>
        <CheckboxLabels className={classes.Checkbox} />
      </Box>
    </Box>
  );
}
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: 600,
    height: 500,
    borderRadius: "8px",
    backgroundColor: theme.palette.backgroundColor.main,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  typo: {
    paddingRight: 180,
    color: theme.palette.color.main,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 120,
    },
  },
  ButtonSignin: {
    textTransform: "capitalize",
    fontSize: 20,
    color: theme.palette.color.wolf,
    fontWeight: 500,
  },
}));
