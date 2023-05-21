import { Schema, model } from "mongoose";
import { IStudents } from "./students.interface";

const studentsSchema = new Schema<IStudents>({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },

  section: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contactNumber: {
    type: Number,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
  },
  fatherName: {
    type: String,
  },
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  class: {
    type: Number,
    required: true,
  },

  skills: {
    type: [String],
    required: true,
  },
});

export const studentsModel = model<IStudents>("Students", studentsSchema);
