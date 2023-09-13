export const fetchEmployeesFromLocalStorage = () => {
  try {
    const storedData = localStorage.getItem("employees");
    if (storedData) {
      return JSON.parse(storedData);
    }
  } catch (error) {
    console.error("Error loading employee data:", error);
  }
  return null;
};

export const fetchEmployeesFromMockApi = async () => {
  try {
    // hack to simulate a delay API response time
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock employee data
    const mockApiData = [
      {
        firstName: "Marc",
        lastName: "Antoine",
        selectedDOB: "08-03-2011",
        selectedStartDate: "08-02-2023",
        department: "Marketing",
        city: "ddsds",
        state: "AS",
        street: "dsd",
        zipCode: "3",
      },
      {
        firstName: "John",
        lastName: "Doe",
        selectedDOB: "08-03-2011",
        selectedStartDate: "08-02-2023",
        department: "Engineering",
        city: "San Francisco",
        state: "CA",
        street: "123 Main Street",
        zipCode: "94101",
      },
      {
        firstName: "Jane",
        lastName: "Smith",
        selectedDOB: "08-03-2011",
        selectedStartDate: "08-02-2023",
        department: "Sales",
        city: "New York",
        state: "NY",
        street: "456 Elm Street",
        zipCode: "10001",
      },
      {
        firstName: "Peter",
        lastName: "Parker",
        selectedDOB: "08-03-2011",
        selectedStartDate: "08-02-2023",
        department: "Human Resources",
        city: "Chicago",
        state: "IL",
        street: "789 Washington Street",
        zipCode: "60606",
      },
      {
        firstName: "Mary",
        lastName: "Jane",
        selectedDOB: "08-03-2011",
        selectedStartDate: "08-02-2023",
        department: "Legal",
        city: "Austin",
        state: "TX",
        street: "101 Congress Avenue",
        zipCode: "78701",
      },
      {
        firstName: "Susan",
        lastName: "Jones",
        selectedDOB: "08-03-2011",
        selectedStartDate: "08-02-2023",
        department: "Marketing",
        city: "Denver",
        state: "CO",
        street: "1234 Larimer Street",
        zipCode: "80202",
      },
      {
        firstName: "David",
        lastName: "Williams",
        selectedDOB: "08-03-2011",
        selectedStartDate: "08-02-2023",
        department: "Engineering",
        city: "Seattle",
        state: "WA",
        street: "5678 1st Avenue",
        zipCode: "98101",
      },
      {
        firstName: "Elizabeth",
        lastName: "Brown",
        selectedDOB: "08-03-2011",
        selectedStartDate: "08-02-2023",
        department: "Sales",
        city: "Boston",
        state: "MA",
        street: "901 Commonwealth Avenue",
        zipCode: "02215",
      },
      {
        firstName: "Michael",
        lastName: "Green",
        selectedDOB: "08-03-2011",
        selectedStartDate: "08-02-2023",
        department: "Human Resources",
        city: "Washington, D.C.",
        state: "DC",
        street: "1600 Pennsylvania Avenue NW",
        zipCode: "20500",
      },
    ];

    return mockApiData;
  } catch (error) {
    console.error("Error fetching data from mock API:", error);
    throw error;
  }
};
