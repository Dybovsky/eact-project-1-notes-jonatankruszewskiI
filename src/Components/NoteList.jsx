import { Box } from "@material-ui/core";
import React from "react";
import Note from "./Note";

const Notelist = (props) => {
  const { notes, deleteNote } = props;

  const checkNotes = () => {
    if (!notes || notes.length === 0) return <Box>No Notes!</Box>;
    return (
      <div className="">
        {notes.map((e, i) => {
          return <Note key={e.id} note={e} />;
        })}
      </div>
    );
  };

  return (
    <div className="">
      {notes.length >= 1 &&
        notes.map((e) => {
          return <Note key={e.id} note={e} deleteNote={deleteNote} />;
        })}
    </div>
  );
};

export default Notelist;
