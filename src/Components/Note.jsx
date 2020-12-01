import React from "react";

const Note = (props) => {
  const {
    note: { id, body, date, title },
  } = props;

  const convertDate = (epochNumber) => {
    const date = new Date(epochNumber);
    const stringDate = `${date.getDay()}/${date.getMonth()}/${date
      .getFullYear()
      .toString()
      .slice(1, 3)} - ${date.getHours()}:${date.getSeconds()}`;
    return stringDate;
  };

  return (
    <div className="app">
      <p>{id}</p>
      <p>{title}</p>
      <p>{body}</p>
      <p>{convertDate(date)}</p>
      <p></p>
    </div>
  );
};

export default Note;
