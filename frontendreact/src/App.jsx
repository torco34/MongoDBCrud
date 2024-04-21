import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginPages } from "./pages/LoginPages";
import { RegisterPages } from "./pages/RegisterPages";
import { AuthProvider } from "./userContext/AuthContext";
function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPages />} />
            <Route path="login" element={<RegisterPages />} />
            <Route path="task" element={<h1> task</h1>} />
            <Route path="add-task" element={<h1>agrega task pegas</h1>} />
            <Route path="task/:id" element={<h1>Task id</h1>} />
            <Route path="profile" element={<h1>home pegas</h1>} />
            <Route path="*" element={<h1>home error</h1>} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
