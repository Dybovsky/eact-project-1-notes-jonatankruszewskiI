import "./App.css";
import React from "react";
import Form from "Components/Form";
import Notelist from "Components/NoteList";
import NoteModel from "models/NoteModel";
import { Box, Container, Grid } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import MaterialUI from "Components/MaterialUI";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
    this.createNote = this.createNote.bind(this);
    this.setState = this.setState.bind(this);
    this.updateNotes = this.updateNotes.bind(this);
  }

  updateNotes(newNotes) {
    this.setState({ notes: newNotes });
  }

  deleteNote(id) {
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
      const filteredNotes = this.state.notes.filter((notes) => notes.id !== id);
      this.updateNotes(filteredNotes);
    }
  }

  createNote(noteBody, noteTitle) {
    const {
      state: { notes },
      updateNotes,
    } = this;
    const id = uuidv4();
    const note = new NoteModel(noteBody, id, noteTitle);
    updateNotes([...notes, note]);
  }

  render() {
    const { notes } = this.state;
    return (
      <MaterialUI></MaterialUI>
      // <Grid container direction="column">
      //   <Form
      //     createNote={(a, b) => {
      //       this.createNote(a, b);
      //     }}></Form>
      //   <Notelist
      //     notes={notes}
      //     deleteNote={(id) => this.deleteNote(id)}></Notelist>
      // </Grid>
    );
  }
}

export default App;
