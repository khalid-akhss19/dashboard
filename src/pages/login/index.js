import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import LoginSection from "../../components/login";

function Login() {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box pt={5} pb={3}>
        <Typography variant="h4" className={classes.titleHead}>
          silicon bets admin
        </Typography>
      </Box>
      <Box>
        <LoginSection />
      </Box>
    </Box>
  );
}

export default Login;
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: theme.palette.backgroundColor.alpha,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  titleHead: {
    paddingRight: 20,
    fontSize: 36,
    fontweight: 500,
    color: theme.palette.color.main,
    textTransform: "capitalize",
    [theme.breakpoints.down("sm")]: {
      fontSize: 24,
      fontweight: 500,
    },
  },
}));
