import React from "react";
import Note from "./Note";

const Notelist = (props) => {
  const { notes } = props;
  return (
    <div className="">
      {notes.length &&
        notes.map((e, i) => {
          return <Note key={e.id} note={e} />;
        })}
    </div>
  );
};

export default Notelist;
