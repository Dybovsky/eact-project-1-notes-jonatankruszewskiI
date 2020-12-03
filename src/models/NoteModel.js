export default class NoteModel {
  constructor(body, id, title = "") {
    this[id] = { title: title, date: Date.now(), body: body };
  }
}
