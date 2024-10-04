import React, { useState } from 'react'
import Select from "react-select";
import makeAnimated from "react-select/animated";
import "./styles/tables.css"; // Custom CSS file

const QMS = () => {
    const employees = [
        { value: "John Doe", label: "John Doe" },
        { value: "Jane Smith", label: "Jane Smith" },
        { value: "Alex Johnson", label: "Alex Johnson" },
        { value: "Emily Davis", label: "Emily Davis" },
        { value: "Michael Brown", label: "Michael Brown" },
        { value: "Sarah Wilson", label: "Sarah Wilson" },
        { value: "David Lee", label: "David Lee" },
      ];
    
      const durations = [
        { value: "1 to 2 hrs", label: "1 to 2 hrs" },
        { value: "2 to 3 hrs", label: "2 to 3 hrs" },
        { value: "3 to 4 hrs", label: "3 to 4 hrs" },
      ];
    
      const [selectedEmployees, setSelectedEmployees] = useState([]);
      const [selectedCourses, setSelectedCourses] = useState([]);
      const [selectedDurations, setSelectedDurations] = useState({});
      const [formError, setFormError] = useState("");
    
      const handleEmployeeChange = (selectedOptions) => {
        setSelectedEmployees(selectedOptions || []);
      };
    
      const handleCourseChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
          setSelectedCourses([...selectedCourses, value]);
        } else {
          setSelectedCourses(selectedCourses.filter((course) => course !== value));
        }
      };
    
      const handleDurationChange = (course, selectedOption) => {
        const duration = selectedOption ? selectedOption.value : "";
        setSelectedDurations((prevDurations) => ({
          ...prevDurations,
          [course]: duration,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedCourses.length === 0) {
          setFormError("Please select at least one course.");
          return;
        }
        const incompleteDurations = selectedCourses.filter(
          (course) => !selectedDurations[course]
        );
        if (incompleteDurations.length > 0) {
          setFormError("Please select duration for all selected courses.");
          return;
        }
        if (selectedEmployees.length === 0) {
          setFormError("Please select at least one employee.");
          return;
        }
    
        // Form is valid
        setFormError("");
        console.log("Selected Courses:", selectedCourses);
        console.log("Selected Durations:", selectedDurations);
        console.log("Selected Employees:", selectedEmployees);
      };
    
      const handleReset = () => {
        setSelectedEmployees([]);
        setSelectedCourses([]);
        setSelectedDurations({});
        setFormError("");
      };
    
      const animatedComponents = makeAnimated();
    
      const courses = [
        'ISO9001 Awareness',
  'Communication Matrix',
  '7 QC Tools',
  'Process Turtle Diagram',
  'Context of Organization',
  'Continual Improvement',
  'Corrective Action',
  'Customer Complaint Handling',
  'Skill Matrix preparation'
      ];
    
      return (
        <form onSubmit={handleSubmit}>
          <table className="course-table">
            <thead>
              <tr>
                <th>SR NO</th>
                <th>Topic</th>
                <th>Duration</th>
                <th>Select</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{course}</td>
                  <td>
                    <Select
                      options={durations}
                      onChange={(selectedOption) => handleDurationChange(course, selectedOption)}
                      value={durations.find(d => d.value === selectedDurations[course]) || null}
                      placeholder="Select Duration"
                      isClearable
                      className="duration-select"
                      classNamePrefix="select"
                      menuPortalTarget={document.body}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      value={course}
                      onChange={handleCourseChange}
                      checked={selectedCourses.includes(course)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="employee-selection">
            <label>Add Employees</label>
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={employees}
              onChange={handleEmployeeChange}
              value={selectedEmployees}
              className="employee-select"
              classNamePrefix="select"
              menuPortalTarget={document.body}
            />
          </div>
          {formError && <p className="form-error">{formError}</p>}
          <div className="button-group">
            <button type="submit" className="submit-button">
              Submit
            </button>
            <button type="button" className="reset-button" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
      );
}

export default QMS
