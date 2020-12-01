import "./App.css";
import React from "react";
import Form from "Components/Form";
import Notelist from "Components/NoteList";
import NoteModel from "models/NoteModel";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      id: 1,
    };
    this.updateId = this.updateId.bind(this);
    this.createNote = this.createNote.bind(this);
    this.setState = this.setState.bind(this);
    this.updateNotes = this.updateNotes.bind(this);
  }

  updateId() {
    this.setState({ id: this.state.id + 1 });
  }

  updateNotes(newNotes) {
    this.setState({ notes: newNotes });
  }

  createNote(noteBody) {
    const {
      state: { id, notes, noteTitle },
      updateId,
      updateNotes,
    } = this;
    const note = new NoteModel(noteBody, id, noteTitle);
    updateId();
    updateNotes([...notes, note]);
  }

  render() {
    const { notes } = this.state;
    return (
      <div className="App">
        <Form
          createNote={(note) => {
            this.createNote(note);
          }}></Form>
        <Notelist notes={notes}></Notelist>
      </div>
    );
  }
}

export default App;
