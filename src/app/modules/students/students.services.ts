import { IStudents } from "./students.interface";
import { studentsModel } from "./students.model";
export const createStudentsServices = async (
  user: IStudents
): Promise<IStudents> => {
  const students = new studentsModel(user);

  const data = await students.save();
  return data;
};
