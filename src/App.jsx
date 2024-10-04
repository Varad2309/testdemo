import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/HomePage/Home';
import Login from './components/LoginAndRegister/Login';
import Logout from './components/LoginAndRegister/Logout';
import Register from './components/LoginAndRegister/Register';
import Navbar from './components/Navbar/Navbar';
import PageNotFound from './components/PageNotFound';
import AddEmployee from './components/AddEmployee/AddEmployeeForm';
import TrainingCalendar from './components/TrainingCalender/TrainingCalendar';
import ServiceRoutes from './routes/serviceRoutes';
import { AuthProvider, useAuth } from './store/auth';
import TrainingAttendance from './components/TrainingAttendance/TrainingAttendance';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={<AuthWrapper><Login /></AuthWrapper>}
          />
          <Route
            path="/register"
            element={<AuthWrapper><Register /></AuthWrapper>}
          />
          <Route
            path="/logout"
            element={<Logout />}
          />
          <Route
            path="/"
            element={<ProtectedRoute><Navbar /><Home /></ProtectedRoute>}
          />
          <Route
            path="/add-employee"
            element={<ProtectedRoute><Navbar /><AddEmployee /></ProtectedRoute>}
          />
          <Route
            path="/training-calender"
            element={<ProtectedRoute><Navbar /><TrainingCalendar /></ProtectedRoute>}
          />
          <Route
            path="/training-attendance"
            element={<ProtectedRoute><Navbar /><TrainingAttendance /></ProtectedRoute>}
          />
          <Route
            path="/service/*"
            element={<ProtectedRoute><Navbar /><ServiceRoutes /></ProtectedRoute>}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

const AuthWrapper = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to="/" /> : children;
};

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default App;
