import Mentor from "../modules/mentor.js";
import Student from "../modules/student.js";

//Each student is assigned a teacher
const assignMultyStudent = async (req, res) => {
  try {
    const mentor = await Mentor.findOne({ _id: req.params.mentor_id });
    const students = await Student.find({ batch: req.params.batch });
    if (!mentor) {
      res.send({
        message: "Mentor id is not valid",
      });
    }
    if (mentor) {
      //This line Each student is assigned a teacher
      let student_id = students.map((e) => e._id.valueOf());
      await Student.updateMany(
        { batch: req.params.batch },
        { mentor: req.params.mentor_id }
      );
      //this only updated mentor
      let filter = { _id: req.params.mentor_id };
      let update = { students: student_id };
      await Mentor.updateOne(filter, update);
      res.status(200).send({ message: "Students add successfully" });
    }
  } catch (error) {}
};

export default { assignMultyStudent };
