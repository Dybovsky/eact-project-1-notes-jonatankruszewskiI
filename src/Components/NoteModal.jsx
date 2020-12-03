import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Box, TextField } from "@material-ui/core";
import NoteModel from "../models/NoteModel";
const NoteModal = (props) => {
  const { updateNote, closeModal, modalState, note } = props;
  const { id, body, title, date } = note;

  const [noteBody, setNoteBody] = useState(body || "");
  const [noteTitle, setNoteTitle] = useState(title || "");

  const updateModal = () => {
    const notesss = new NoteModel(noteBody, id, noteTitle);
    const newNote = {
      title: noteTitle,
      body: noteBody,
      id: id,
      date: Date.now(),
    };
    updateNote(id, newNote);
  };

  return (
    <Dialog
      open={modalState}
      onClose={() => closeModal()}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">Update Note</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Title"
          placeholder="Title"
          type="text"
          inputProps={{
            maxLength: 10,
          }}
          variant="outlined"
          name="noteTitle"
          value={noteTitle}
          onInput={(e) => {
            setNoteTitle(e.target.value);
          }}
        />
        <Box mt={2}>
          <TextField
            label="Don't forget to..."
            multiline
            fullWidth
            inputProps={{
              maxLength: 90,
            }}
            rows={4}
            variant="outlined"
            name="noteBody"
            value={noteBody}
            onInput={(e) => {
              setNoteBody(e.target.value);
            }}
          />
        </Box>
        <DialogContentText id="alert-dialog-description">
          Keep your notes Updated!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => closeModal()} color="primary" autoFocus>
          Cancel
        </Button>
        <Button onClick={updateModal} color="primary">
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NoteModal;
