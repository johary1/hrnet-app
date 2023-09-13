import { createContext, useContext, useState, useEffect } from "react";
import { fetchEmployeesFromLocalStorage } from "../service/employeeApi";
const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const storedData = fetchEmployeesFromLocalStorage();
        if (storedData) {
          setEmployees(storedData);
        }
        
      } catch (error) {
        console.error("Error loading employee data:", error);
      }
    };
  
    loadData();
  }, []);

  
  const addEmployee = (employee) => {
    setEmployees((prevEmployees) => [...prevEmployees, employee]);
  };

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useEmployeeContext = () => useContext(EmployeeContext);
