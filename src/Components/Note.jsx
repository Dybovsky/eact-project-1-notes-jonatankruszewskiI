import { Button, Card } from "@material-ui/core";
import React from "react";

const Note = (props) => {
  const {
    note: { id, body, date, title },
    deleteNote,
  } = props;

  const convertDate = (epochNumber) => {
    const date = new Date(epochNumber);
    const leadingZero = (num) => `0${num}`.slice(-2);

    const formatTime = (date) =>
      [date.getHours(), date.getMinutes(), date.getSeconds()]
        .map(leadingZero)
        .join(":");

    const stringDate = `${date.getDay()}/${date.getMonth()}/${date
      .getFullYear()
      .toString()} - ${formatTime(date)}`;
    return stringDate;
  };

  return (
    <Card>
      <p>{id}</p>
      <p>{title}</p>
      <p>{body}</p>
      <p>{convertDate(date)}</p>
      <p></p>
      <Button onClick={() => deleteNote(id)} variant="contained">
        Delete
      </Button>
      <Button variant="contained">Modify</Button>
    </Card>
  );
};

export default Note;
