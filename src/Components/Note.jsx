import { Button, Card, Grid } from "@material-ui/core";
import React from "react";
import { convertDate } from "../helpers/convertDate";

const Note = (props) => {
  const {
    note: { id, body, date, title },
    deleteNote,
    modifyNote,
  } = props;

  return (
    <Grid
      onClick={() => {
        modifyNote(props.note.id);
      }}
      item
      xs={12}
      md={6}
      lg={4}
      xl={3}
    >
      <Card>
        <p>{title}</p>
        <p>{body}</p>
        <p>{convertDate(date)}</p>
        <p></p>
        <Button
          onClick={(event) => {
            event.stopPropagation();
            deleteNote(props.note.id);
          }}
          variant="contained"
        >
          Delete
        </Button>
        <Button variant="contained">Modify</Button>
      </Card>
    </Grid>
  );
};

export default Note;
//
