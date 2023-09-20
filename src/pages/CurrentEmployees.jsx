import { useState, useEffect } from "react"; // Import useContext
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useEmployeeContext } from "../context/EmployeeContext"; // Import the EmployeeContext
import Select from "../components/Select";
import FormSearch from "../components/FormSearch";
import Pagination from "../components/Pagination";
import "./style/CurrentEmployees.css";
import { fetchEmployeesFromMockApi } from "../service/employeeApi";
import CustomModal from "success-modal-customized";
import "./style/CustomModal.css";

const CurrentEmployees = () => {
  const { employees,addEmployee } = useEmployeeContext();// Use the context hook to get employees data
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage, setEmployeesPerPage] = useState(10);

  const [sortedEmployees, setSortedEmployees] = useState([]);
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Update sortedEmployees state whenever employees changes
  useEffect(() => {
    setSortedEmployees([...employees]);
  }, [employees]);

  const handleEmployeesPerPageChange = (event) => {
    setEmployeesPerPage(event.target.value);
  };

  const columns = [
    {
      name: "First Name",
      data: "firstName",
    },
    {
      name: "Last Name",
      data: "lastName",
    },
    {
      name: "Start Date",
      data: "selectedStartDate",
    },
    {
      name: "Department",
      data: "department",
    },
    {
      name: "Date of Birth",
      data: "selectedDOB",
    },
    {
      name: "Street",
      data: "street",
    },
    {
      name: "City",
      data: "city",
    },
    {
      name: "State",
      data: "state",
    },
    {
      name: "Zip Code",
      data: "zipCode",
    },
  ];

  // Calculate the indexes for pagination
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = sortedEmployees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Add a state to keep track of the sorting direction
  const [sortDirection, setSortDirection] = useState("ascending");

  // Handle sort click
  const handleSortClick = (event) => {
    const th = event.target.closest("th");
    console.log(th);
    const columnName = th.querySelector("span").textContent;
    console.log(columnName);

    const columnIndex = columns.findIndex(
      (column) => column.name === columnName
    );
    console.log(columnIndex);

    const newSortDirection =
      sortDirection === "ascending" ? "descending" : "ascending";
    setSortDirection(newSortDirection);

    const newSortedEmployees = [...sortedEmployees].sort((a, b) => {
      const valueA = a[columns[columnIndex].data];
      const valueB = b[columns[columnIndex].data];
      if (newSortDirection === "ascending") {
        return valueA.localeCompare(valueB); // Compare as strings
      } else {
        return valueB.localeCompare(valueA);
      }
    });
    setSortedEmployees(newSortedEmployees);
    console.log(newSortedEmployees);
  };

  const [hasSearchResults, setHasSearchResults] = useState(true);
  const handleSearch = (searchTerm) => {
    const filteredEmployees = employees.filter((employee) => {
      const searchTermLower = searchTerm.toLowerCase();
      const zipCodeAsString = employee.zipCode.toString();

      return (
        employee.firstName.toLowerCase().includes(searchTermLower) ||
        employee.lastName.toLowerCase().includes(searchTermLower) ||
        employee.department.toLowerCase().includes(searchTermLower) ||
        employee.street.toLowerCase().includes(searchTermLower) ||
        employee.city.toLowerCase().includes(searchTermLower) ||
        employee.state.toLowerCase().includes(searchTermLower) ||
        zipCodeAsString.includes(searchTerm)
      );
    });
    setSortedEmployees(filteredEmployees);
    setHasSearchResults(filteredEmployees.length > 0);
  };
  const [showModal, setShowModal] = useState(false);
  const handleLoadMockData = async () => {
    try {
      // Fetch mock data from the API
      const mockData = await fetchEmployeesFromMockApi();
      console.log(mockData);

      // Iterate over the mock data and add each employee to the context as mock data
      for (const employee of mockData) {
        addEmployee(employee, true); // Set isMockEmployee flag to true
      }
      // Show the custom modal with a success message
      setShowModal(true);
    } catch (error) {
      console.error("Error loading mock data:", error);
    }
  };

  return (
    <div className="current-employees__wrapper">
      <Container id="employee-div">
         {/* Conditionally render the overlay */}
       {showModal && <div className="modal-overlay"></div>}
        <div className="employee-list__header">
          <h1 className="employee-list__title">Current Employees</h1>
          <p className="employee-count">Total Employees: {employees.length}</p>
          <div className="employee-list__filter">
            <div className="show-entries">
              <span id="entries-txt">Show entries</span>
              <Select
                options={[
                  { value: 10, label: "10" },
                  { value: 20, label: "20" },
                  { value: 50, label: "50" },
                  { value: 100, label: "100" },
                ]}
                onChange={handleEmployeesPerPageChange}
              />
            </div>
            <div className="form-search__wrapper">
              <FormSearch onSearch={handleSearch} />
            </div>
          </div>
        </div>
        <div className="demo-buttons">
          <button onClick={handleLoadMockData}>Demo data</button>
          <button onClick={() => window.location.reload()}>Clear demo</button>
        </div>
        <div className="table-container">
          <Table responsive>
            <thead>
              <tr className="truncate">
                {columns.slice(0, 4).map((column) => (
                  <th key={column.name} className="sticky-cell">
                    <div className="th-wrapper">
                    <span>{column.name}</span>
                      <i className="fas fa-sort" onClick={handleSortClick}></i>
                    </div>
                  </th>
                ))}
                {columns.slice(4).map((column) => (
                  <th key={column.name}>
                    <span>{column.name}</span>
                    <i className="fas fa-sort" onClick={handleSortClick}></i>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {hasSearchResults ? (
                currentEmployees.map((employee, index) => (
                  <tr key={index}>
                    {columns.map((column) => (
                      <td key={column.name}>{employee[column.data]}</td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={columns.length} className="no-result">
                    No matching records found.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
        <Pagination
          employeesPerPage={employeesPerPage}
          totalEmployees={employees.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </Container>
      {/* Render the custom modal when showModal is true */}
    {/* Conditionally render the modal */}
    {showModal && (
          <CustomModal id="custom-modal" show={showModal} handleClose={handleCloseModal} text="Demo data has been loaded!" />
        )}
    </div>
  );
};

export default CurrentEmployees;
