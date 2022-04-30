import React from "react"
import { Redirect } from "react-router-dom"

// Dashboard
import Dashboard from "../pages/Dashboard/Admin"
import Student_Dashboard from "../pages/Dashboard/Student-dashboard"
import Parent_Dashboard from "../pages/Dashboard/Parent-dashboard"
import AllStudents from "../pages/Students/AllStudents"
import AddNewStudents from "../pages/Students/Add-New-Students"
import AllTeachers from "../pages/Teachers/AllTeachers"
import AddNewTeacher from "../pages/Teachers/Add-New-Teacher"
import AllParetns from "../pages/Parents/All-Parents"



// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"

const userRoutes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/student", component: Student_Dashboard },
  { path: "/parent", component: Parent_Dashboard },
  { path: "/all-students", component: AllStudents },
  { path: "/new-student", component: AddNewStudents },
  { path: "/all-teachers", component: AllTeachers },
  { path: "/new-teacher", component: AddNewTeacher },
  { path: "/parents", component: AllParetns },



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