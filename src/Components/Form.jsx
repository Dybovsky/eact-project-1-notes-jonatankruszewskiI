import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteBody: "",
      noteTitle: "",
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  resetNote = () => {
    this.setState({ noteBody: "" });
  };

  submitNote(e) {
    const {
      resetNote,
      props: { createNote },
      state: { noteBody },
    } = this;
    e.preventDefault();
    console.log("submitting note");
    createNote(noteBody);
    resetNote();
  }

  render() {
    return (
      <div>
        <form
          onSubmit={(e) => {
            this.submitNote(e);
          }}>
          <input
            type="text"
            //@ts-ignore
            maxLength="90"
            value={this.state.noteTitle}
            name="noteTitle"
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <textarea
            // @ts-ignore
            maxLength="10"
            name="noteBody"
            value={this.state.noteBody}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default Form;
