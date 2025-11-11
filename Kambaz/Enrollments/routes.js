import EnrollmentsDao from "./dao.js";

export default function EnrollmentsRoutes(app, db) {
  const dao = EnrollmentsDao(db);

  const findAllEnrollments = (req, res) => {
    const enrollments = dao.findAllEnrollments();
    res.send(enrollments);
  };

  const enrollUserInCourse = (req, res) => {
    const { courseId } = req.body;
    const currentUser = req.session["currentUser"];
    const newEnrollment = dao.enrollUserInCourse(currentUser._id, courseId);
    res.send(newEnrollment);
  };

  const deleteEnrollment = (req, res) => {
    const { enrollmentId } = req.params;
    const status = dao.deleteEnrollment(enrollmentId);
    res.send(status);
  };

  app.get("/api/enrollments", findAllEnrollments);
  app.post("/api/users/current/enrollments", enrollUserInCourse);
  app.delete("/api/enrollments/:enrollmentId", deleteEnrollment);
}
