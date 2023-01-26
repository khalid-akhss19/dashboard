import React from "react";
import { Box, TableCell, TableRow } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import pic from "../../assets/image/ava.png";
import Button from "../buttons";
import BasicTable from "../table";
import RacOptionsBtn from "./racOptionsBtn";
const columns = [
  "Id",
  "tiltle",
  "description",
  "link",
  "action",
];

const clients = [
  "1",
  "Lorem Ipsum",
  "is simply dummy text of the printing and typesetting industry. ",
  "https://www.w3.org",
];
const rows = [clients, clients, clients, clients, clients];

const RcaCard = () => {
  const classes = useStyles();
  const head = columns.map((col, id) => (
    <TableCell key={id} className={classes.col}>
      {col}
    </TableCell>
  ));

  const body = rows.map((row, id) => (
    <TableRow key={id}>
      {row.map((col) =>
        col.type ? (
          <TableCell className={classes.col}>
            {/* <img src={`${col.src}`} alt="" /> */}
          </TableCell>
        ) : (
          <TableCell className={classes.col}>{col}</TableCell>
        )
      )}

      <TableCell>
        <Box className={classes.actionBtn}>
          <Button className={classes.btnview} variant="outline">
            view
          </Button>
          <Button variant="contain">delete</Button>
          {/* <RacOptionsBtn /> */}
        </Box>
      </TableCell>
    </TableRow>
  ));
  return <BasicTable tableName="FILMS" head={head} body={body} addBtn="Add" />;
};
export default RcaCard;
const useStyles = makeStyles((theme) => ({
  textcell: {
    color: theme.palette.color.secondary,
  },
  col: {
    color: theme.palette.color.primary,
  },
  actionBtn: {
    display: "flex",
    alignItems: "center",
  },
  btnview: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: 10,
    },
  },
}));
