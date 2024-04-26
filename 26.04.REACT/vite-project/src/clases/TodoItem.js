 import {nanoid} from "nanoid"       
 class Todoitem {
  constructor(title) {
    this.title = title;
    this.id = nanoid();
    this.createAt = new Date();
    this.isDone = false;
  }
}
export default Todoitem;
