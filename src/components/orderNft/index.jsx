import React from "react";
import { TableCell, TableRow } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import pic from "../../assets/image/ava.png";
import Button from "../buttons";
import BasicTable from "../table";
const columns = [
  "id",
  " name",
  " p name",
  " email",
  " insta id",
  " phone number",
  " weeding",
  " reception ",
  " guest ",
  " budget ",
  " photographers ",
  "total items",
  "created at",
  "Action",
];

const clients = ["1", "holaa", "holaa1", "khalid@gmail.com", "www.instagram.com", "+9234444889", "isb", "f7", "123", "ali", "123", " 3", "0.513ETH"];
const rows = [clients, clients, clients, clients];

const OrderNft = () => {
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
            <img src={`${col.src}`} />
          </TableCell>
        ) : (
          <TableCell className={classes.col}>{col}</TableCell>
        )
      )}

      <TableCell>
        <Button className={classes.btnview} variant="outline">
          view{" "}
        </Button>{" "}
        <Button variant="contain">delete</Button>
      </TableCell>
    </TableRow>
  ));
  return <BasicTable tableName="Mails" head={head} body={body} />;
};
export default OrderNft;
const useStyles = makeStyles((theme) => ({
  textcell: {
    color: theme.palette.color.secondary,
  },
  col: {
    color: theme.palette.color.primary,
  },
  btnview: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: 10,
    },
  },
}));
