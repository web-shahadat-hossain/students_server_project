import { Types } from "mongoose";

export interface IStudents {
  name: string;
  age: number;
  section: string;
  email: string;
  contactNumber: number;
  address: string;
  motherName?: string;
  fatherName?: string;
  id: number;
  class: number;
  skills: Types.Array<string>;
}
