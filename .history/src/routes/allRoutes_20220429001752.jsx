import React from "react"
import { Redirect } from "react-router-dom"

// Admin pages
import Dashboard from "../pages/Dashboard/Admin"
import Student_Dashboard from "../pages/Dashboard/Student-dashboard"
import Parent_Dashboard from "../pages/Dashboard/Parent-dashboard"

//students pages
import AllStudents from "../pages/Students/AllStudents"
import AddNewStudents from "../pages/Students/Add-New-Students"
import UpdateStudents from "../pages/Students/Update-student-details"
import StudentDetail from "../pages/Students/Students-details"

//teachers pages
import AllTeachers from "../pages/Teachers/AllTeachers"
import AddNewTeacher from "../pages/Teachers/Add-New-Teacher"
import TeacherDetails from "../pages/Teachers/Teacher-details"
import UpdateTeacher from "../pages/Teachers/Update-teacher"

//parents pages
import AllParetns from "../pages/Parents/All-Parents"
import ParentDetails from "../pages/Parents/Parent-details"

//books pages
import AllBooks from "../pages/Library/AllBooks"
import AddNewBook from "../pages/Library/Add-New-Book"
import BookDetails from "../pages/Library/Book-details"
import UpdateBook from "../pages/Library/Update-Book"

//Payment pages
import AllFessCollections from "../pages/Acoount/All-fees-collection"
import CreateStudentPayment from "../pages/Acoount/Create-student-payment"
import UpdatePayment from "../pages/Acoount/Update-Payement"

import AddNewExpense from "../pages/Acoount/Add-new-expense"
import AllExpenses from "../pages/Acoount/All-expenses"
import AllClasses  from "../pages/Class/All-classes"
import AddClass  from "../pages/Class/Add-Cass"
import AllSubjects from "../pages/Subjects/All-subjects"
import AddSubjects from "../pages/Subjects/add-subject"
import AllExams from "../pages/Exams/All-exams"
import AddExam from "../pages/Exams/Add-Exam"
import AllTransport from "../pages/Transport/All-transport"
import AddTransport from "../pages/Transport/Add-transport"
import AllNotice from "../pages/Notice/All-notice-board"
import AddNotice from "../pages/Notice/add-notice"
import AllMessage from "../pages/Messages/All-messages"
import AddMessage from "../pages/Messages/Create-message"
import UserProfile from "../pages/Account Settings/User-profile"
import AddUserProfile  from "../pages/Account Settings/Add-user-profile"


// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"


//All related Pages 
const userRoutes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/student", component: Student_Dashboard },
  { path: "/parent", component: Parent_Dashboard },

  { path: "/all-students", component: AllStudents },
  { path: "/new-student", component: AddNewStudents },
  { path: "/student-detail/:id", component: StudentDetail },
  { path: "/update-student/:id", component: UpdateStudents },

  { path: "/all-teachers", component: AllTeachers },
  { path: "/new-teacher", component: AddNewTeacher },
  { path: "/teacher-details/:id", component: TeacherDetails },
  { path: "/update-teacher/:id", component: UpdateTeacher },

  { path: "/parents", component: AllParetns },
  { path: "/parent-details/:id", component: ParentDetails },

  { path: "/all-books", component: AllBooks },
  { path: "/add-book", component: AddNewBook },
  { path: "/book-details/:id", component: BookDetails },
  { path: "/update-book/:id", component: UpdateBook },

  //Payement pages
  { path: "/all-fees-collection", component: AllFessCollections },
  { path: "/create-student-payment", component: CreateStudentPayment },
  { path: "/update-payment/:id", component: UpdatePayment },
  { path: "/add-new-expense", component: AddNewExpense },
  { path: "/all-expenses", component: AllExpenses },

  { path: "/all-classes", component: AllClasses },
  { path: "/add-class", component: AddClass },

  { path: "/all-subjects", component: AllSubjects },
  { path: "/add-subject", component: AddSubjects },

  { path: "/all-exams", component: AllExams },
  { path: "/add-exam", component: AddExam },

  { path: "/all-transport", component: AllTransport },
  { path: "/add-transport", component: AddTransport },

  { path: "/all-notice", component: AllNotice },
  { path: "/add-notice", component: AddNotice },

  { path: "/all-message", component: AllMessage },
  { path: "/add-message", component: AddMessage },

  { path: "/user-profile", component: UserProfile },
  { path: "/add-user-profile", component: AddUserProfile },

  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const authRoutes = [

  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },

]

export { userRoutes, authRoutes }