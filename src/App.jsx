import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EmployeeProvider } from "./context/EmployeeContext";

// pages

import HomePage from "./pages/HomePage";
import CreateEmployee from "./pages/CreateEmployee";
import CurrentEmployees from "./pages/CurrentEmployees";
import Error404 from "./pages/Error404";

// components
import Header from "./components/Header";
// import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <EmployeeProvider>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/createemployee" element={<CreateEmployee />} />
          <Route path="/currentemployees" element={<CurrentEmployees />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        {/* <Footer /> */}
      </EmployeeProvider>
    </BrowserRouter>
  );
};

export default App;
