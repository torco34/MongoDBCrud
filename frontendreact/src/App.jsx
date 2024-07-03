import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { ProtectedRouter } from "./ProtectedRouter";
import { HomePages } from "./pages/HomePages";
import { LoginPages } from "./pages/LoginPages";
import { ProfilePages } from "./pages/ProfilePages";
import { RegisterPages } from "./pages/RegisterPages";
import { TaskPages } from "./pages/TaskPages";
import { TasksFormPages } from "./pages/TasksFormPages";
import { AuthProvider } from "./userContext/AuthContext";
function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePages />} />
            <Route path="login" element={<LoginPages/>} />
            <Route path="register" element={<RegisterPages />} />
         <Route element={<ProtectedRouter/>}>
         <Route path="tasks" element={<TaskPages/>} />
            <Route path="addTask" element={<TasksFormPages/>} />
            <Route path="task/:id" element={<TasksFormPages/>} />
            <Route path="profile" element={<ProfilePages/>} />
         </Route>
            <Route path="*" element={<h1>home error</h1>} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
