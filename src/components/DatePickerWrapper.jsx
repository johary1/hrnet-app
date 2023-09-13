import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerWrapper = ({ selectedDate, onChange, ...optionsList }) => (
  <DatePicker
    dateFormat="MM-dd-yyyy"
    placeholderText="Select a date"
    selected={selectedDate}
    onChange={onChange}
    {...optionsList}
  />
);

export default DatePickerWrapper;
