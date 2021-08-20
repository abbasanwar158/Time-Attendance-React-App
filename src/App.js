import Layout from "./hoc/Layout";
import './App.css';
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Navbar from "./containers/Navbar";
import Dashboard from "./containers/Dashboard";
import ViewAttendance from "./containers/Attendance/ViewAttendance";
import NewAttendance from "./containers/Attendance/ManageAttendance";
import AttendanceReport from "./containers/Attendance/AttendanceReport";
import UploadAttendance from "./containers/Attendance/UploadAttendance";
import EmailAttendance from "./containers/Attendance/EmailAttendance";
import EditAttendace from "./containers/Attendance/EditAttendance"
import ViewLeaves from "./containers/Leaves/ViewLeaves";
import ApplyLeaves from "./containers/Leaves/ApplyLeave";
import NewLeaves from "./containers/Leaves/NewLeave";
import LeavesReport from "./containers/Leaves/LeavesReport";
import LeavesWBS from "./containers/Leaves/LeavesWBS";
import EditLeave from "./containers/Leaves/EditLeave"
import UploadLeaves from "./containers/Leaves/UploadLeaves";
import ViewEmployees from "./containers/Employees/AllEmployees";
import ActiveEmployees from "./containers/Employees/ActiveEmployees";
import EditEmployeeStatus from "./containers/Employees/EditEmployeeStatus";
import NewEmployee from "./containers/Employees/NewEmployee";
import EditEmployee from "./containers/Employees/EditEmployee";
import UploadEmployeeData from "./containers/Employees/UploadEmployeeData";
import EmployeesReport from "./containers/Employees/EmployeesReport";
import ReviewDate from "./containers/Employees/ReviewDate";
import ReviewDateEdit from "./containers/Employees/ReviewDateEdit";
import ViewHolidays from "./containers/Holidays/ViewHolidays";
import AddHoliday from "./containers/Holidays/AddHoliday";
import ManageUsers from "./containers/Users/ManageUsers";
import EditUser from "./containers/Users/EditUser";
import pageNotFound from "./pageNotFound";
import RootContext from "./context/RootContext";
import ProtectedRoute from "./hoc/ProtectedRoute";
import UnProtectedRoute from "./hoc/UnProtectedRoute";


import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom';

function App() {
  return (
    <RootContext>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <UnProtectedRoute exact path="/login">
            <Login />
          </UnProtectedRoute>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <ProtectedRoute exact path="/dashboard">
            <Layout>
              <Dashboard />
            </Layout>
          </ProtectedRoute>
          <ProtectedRoute exact path="/attendance">
            <Layout>
              <ViewAttendance />
            </Layout>
          </ProtectedRoute>
          <ProtectedRoute exact path="/attendance/new">
            <Layout>
              <NewAttendance />
            </Layout>
          </ProtectedRoute>
          <ProtectedRoute exact path="/attendance/report">
            <Layout>
              <AttendanceReport />
            </Layout>
          </ProtectedRoute>
          <ProtectedRoute exact path="/attendance/upload">
            <Layout>
              <UploadAttendance />
            </Layout>
          </ProtectedRoute>
          <ProtectedRoute exact path="/attendance/email">
            <Layout>
              <EmailAttendance />
            </Layout>
          </ProtectedRoute>
          <ProtectedRoute exact path="/attendance/edit">
            <Layout>
              <EditAttendace />
            </Layout>
          </ProtectedRoute>
          <ProtectedRoute exact path="/leaves">
            <Layout>
              <ViewLeaves />
            </Layout>
          </ProtectedRoute>
          <ProtectedRoute exact path="/leaves/apply">
            <Layout>
              <ApplyLeaves />
            </Layout>
          </ProtectedRoute>
          <ProtectedRoute exact path="/leaves/edit">
            <Layout>
              <EditLeave />
            </Layout>
          </ProtectedRoute>
          <ProtectedRoute exact path="/leaves/new">
            <Layout>
              <NewLeaves />
            </Layout>
          </ProtectedRoute>
          <ProtectedRoute exact path="/leaves/report">
            <Layout>
              <LeavesReport />
            </Layout>
          </ProtectedRoute>
          <ProtectedRoute exact path="/leaves/schedule">
            <Layout>
              <LeavesWBS />
            </Layout>
          </ProtectedRoute>
          <ProtectedRoute exact path="/leaves/upload">
            <Layout>
              <UploadLeaves />
            </Layout>
          </ProtectedRoute>
          <ProtectedRoute exact path="/employees">
            <Layout>
              <ViewEmployees />
            </Layout>
          </ProtectedRoute>
          <ProtectedRoute exact path="/employees/active">
            <Layout>
              <ActiveEmployees />
            </Layout>
          </ProtectedRoute>
          <ProtectedRoute exact path="/employees/edit_status">
            <Layout>
              <EditEmployeeStatus />
            </Layout>
          </ProtectedRoute>
          <ProtectedRoute exact path="/employees/edit">
            <Layout>
              <EditEmployee />
            </Layout>
          </ProtectedRoute>
          <ProtectedRoute exact path="/employee/new">
            <Layout>
              <NewEmployee />
            </Layout>
          </ProtectedRoute>
          <ProtectedRoute exact path="/employees/upload">
            <Layout>
              <UploadEmployeeData />
            </Layout>
          </ProtectedRoute>
          <ProtectedRoute exact path="/employees/review_date">
            <Layout>
              <ReviewDate />
            </Layout>
          </ProtectedRoute>
          <ProtectedRoute exact path="/employees/review_date/edit">
            <Layout>
              <ReviewDateEdit />
            </Layout>
          </ProtectedRoute>
          <ProtectedRoute exact path="/employees/report">
            <Layout>
              <EmployeesReport />
            </Layout>
          </ProtectedRoute>
          <ProtectedRoute exact path="/holidays">
            <Layout>
              <ViewHolidays />
            </Layout>
          </ProtectedRoute>
          <ProtectedRoute exact path="/holiday/new">
            <Layout>
              <AddHoliday />
            </Layout>
          </ProtectedRoute>
          <ProtectedRoute exact path="/users/new">
            <Layout>
              <ManageUsers />
            </Layout>
          </ProtectedRoute>
          <ProtectedRoute exact path="/user/edit">
            <Layout>
              <EditUser />
            </Layout>
          </ProtectedRoute>
          <Redirect from="/" exact to="/login" />
          <Route component={pageNotFound} />
        </Switch>
      </BrowserRouter >
    </RootContext>
  );
}

export default App;
