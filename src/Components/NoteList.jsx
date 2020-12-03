import { Box, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Note from "./Note";

const Notelist = (props) => {
  const { notes, deleteNote, modifyNote } = props;
  let notesArray = [];

  const noteList = () => {
    for (let note in notes) {
      let copyNote = notes[note];
      copyNote.id = note;
      notesArray.push(copyNote);
    }
  };

  useEffect(() => {
    noteList();
  });

  return (
    <Box p={3}>
      <Grid item container spacing={4}>
        {Object.keys(notes).map((keyName, index) => {
          return (
            <Note
              key={keyName}
              note={notes[keyName]}
              modifyNote={(id) =>  modifyNote(id)}
              deleteNote={(id) => {
                deleteNote(id);
              }}
            />
          );
        })}
      </Grid>
    </Box>
  );
};

export default Notelist;
