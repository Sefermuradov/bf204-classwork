import { nanoid } from "nanoid";
import moment from "moment";
export class Student {
  constructor(fullName, username, email, password, profileImage) {
    this.id = nanoid();
    this.fullName = fullName;
    this.username = username;
    this.email = email;
    this.password = password;
    this.grades = [];
    this.profileImage = profileImage;
  }
}

export class Teacher {
  constructor(fullName, username, email, password, major, profileImage) {
    this.id = nanoid();
    this.fullName = fullName;
    this.username = username;
    this.email = email;
    this.password = password;
    this.major = major;
    this.profileImage = profileImage;
  }
}

export class Task {
  constructor(title, description, topic, deadline, teacherId) {
    this.id = nanoid();
    this.title = title;
    this.description = description;
    this.topic = topic;
    this.deadline = deadline;
    this.teacherId = teacherId;
    this.createdAt = moment().format();
    this.assignments = [];
  }
}
