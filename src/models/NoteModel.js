export default class NoteModel {
  constructor(body, id, title = "") {
    this.body = body;
    this.id = id;
    this.title = title;
    this.date = Date.now();
  }
}
