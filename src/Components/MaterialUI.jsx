import { Grid } from "@material-ui/core";
import React from "react";
import Content from "./Content";
import Form from "./Form";
import Header from "./Header";

const MaterialUI = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header></Header>
      </Grid>
      <Grid item container m={3}>
        <Grid item xs={12} sm={2} />
        <Grid item xs={12} sm={8}>
          <Form />
        </Grid>
        <Grid item xs={12} sm={2} />
      </Grid>
    </Grid>
  );
};
export default MaterialUI;
