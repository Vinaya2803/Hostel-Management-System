import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./components/LandingSite/About/index";
import LandingSite from "./components/LandingSite/Index";
import LandingPage from "./components/LandingSite/LandingPage/index"
import Auth from "./components/LandingSite/AuthPage/Index";
import SignIn from "./components/LandingSite/AuthPage/SignIn";
import RequestAcc from "./components/LandingSite/AuthPage/Request";
import AdminSignIn from "./components/LandingSite/AuthPage/AdminSignIn";
import Index from "./components/Dashboards/StudentDashboard/Index";
import Home from "./components/Dashboards/StudentDashboard/Home";
import Mess from "./components/Dashboards/StudentDashboard/Mess";
import Invoices from "./components/Dashboards/StudentDashboard/Invoices";
import Complaints from "./components/Dashboards/StudentDashboard/Complaints";
import AdminIndex from "./components/Dashboards/AdminDashboard/Index";
import AdminHome from "./components/Dashboards/AdminDashboard/Home/Home"
import RegisterStudent from "./components/Dashboards/AdminDashboard/RegisterStudent";
import AdminComplaints from "./components/Dashboards/AdminDashboard/Complaints";
import AdminInvoices from './components/Dashboards/AdminDashboard/Invoices'
import AllStudents from "./components/Dashboards/AdminDashboard/AllStudents";
import AdminMess from "./components/Dashboards/AdminDashboard/MessOff";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingSite />}>
          <Route index element={<LandingPage />} />
          <Route path="about" element={<About />} />
          <Route path="auth" element={<Auth />}>
            <Route index element={<SignIn />} />
            <Route path="login" element={<SignIn />} />
            <Route path="request" element={<RequestAcc />} />
            <Route path="admin-login" element={<AdminSignIn />} />
          </Route>
        </Route>
        <Route path="/student-dashboard" element={<Index />}>
          <Route index element={<Home />} />
          <Route path="mess" element={<Mess />  } />
          <Route path="complaints" element={<Complaints/>} />
          <Route path="invoices" element={<Invoices/>} />
        </Route>
        <Route path="/admin-dashboard" element={<AdminIndex />}>
          <Route index element={<AdminHome />} />
          <Route path='register-student' element={<RegisterStudent />} />
          <Route path="complaints" element={<AdminComplaints />} />
          <Route path="invoices" element={<AdminInvoices/>} />
          <Route path="all-students" element={<AllStudents/>}/>
          <Route path="mess" element={<AdminMess />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
