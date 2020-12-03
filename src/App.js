import "./App.css";
import React from "react";
import Form from "Components/Form";
import Notelist from "Components/NoteList";
import NoteModel from "models/NoteModel";
import { Box, Container, Grid } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import Header from "Components/Header";
import NoteModal from "./Components/NoteModal";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: {},
      triggerModal: false,
      selectedNote: null,
    };
    this.createNote = this.createNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.modifyNote = this.modifyNote.bind(this);
  }

  deleteNote(id) {
    const { notes } = this.state;
    console.log(id);
    window.confirm("Are you sure?") && delete notes[id];
    this.setState({ notes: notes });
  }

  createNote(noteBody, noteTitle) {
    const { notes } = this.state;
    const id = uuidv4();
    const note = new NoteModel(noteBody, id, noteTitle);
    const newNotes = Object.assign(notes, note);
    this.setState({ notes: newNotes });
  }

  updateNote(id, newNote) {
    const { notes } = this.state;
    const newNotes = Object.assign({}, notes);
    newNotes[id] = newNote;
    this.setState({ notes: newNotes, triggerModal: false, selectedNote: null });
  }

  modifyNote(id) {
    this.setState({ triggerModal: true, selectedNote: id });
  }

  closeModal() {
    this.setState({ triggerModal: false });
  }

  render() {
    const { notes, triggerModal, selectedNote } = this.state;
    return (
      <>
        {triggerModal && (
          <NoteModal
            updateNote={(a, b) => {
              this.updateNote(a, b);
            }}
            closeModal={() => this.closeModal()}
            modalState={triggerModal}
            note={notes[selectedNote] || new NoteModel("", "", "")}
          ></NoteModal>
        )}

        <Grid container>
          <Header></Header>
        </Grid>
        <Grid container>
          <Grid item xs={false} sm={2} md={3} />
          <Grid container item direction="column" xs={12} sm={8} md={6}>
            <Form
              createNote={(a, b) => {
                this.createNote(a, b);
              }}
            ></Form>
          </Grid>
          <Grid item xs={false} sm={2} md={3} />
        </Grid>
        <Notelist
          notes={notes}
          deleteNote={(id) => {
            this.deleteNote(id);
          }}
          modifyNote={(id) => {
            this.modifyNote(id);
          }}
        ></Notelist>
      </>
    );
  }
}

export default App;
