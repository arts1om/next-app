"use client";

import { makeStyles } from "@mui/styles";
import Link from "next/link";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      height: "90vh",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
    },
  };
});

export default function NotFound() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h2>404 | Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
