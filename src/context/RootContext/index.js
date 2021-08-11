import React, { useEffect, useState } from "react";

export const RootContext = React.createContext();


export default ({ children }) => {

  const [ActiveEmployeeNames, setActiveEmployeeNames] = useState([])
  const [leavesData, setLeavesData] = useState([])
  const [employeesData, setEmployeesData] = useState([])
  const [allEmployeesData, setAllEmployeesData] = useState([])
  const [usersData, setUsersData] = useState([])
  const [currentUser, setCurrentUser] = useState(null);
  const [attendanceData, setAttendanceData] = useState([])
  const [index, setIndex] = useState('')
  /*****all root context variables and function ********************/
  const defaultContext = {
    currentUser,
    setCurrentUser,
    ActiveEmployeeNames,
    setActiveEmployeeNames,
    leavesData,
    setLeavesData,
    index,
    setIndex,
    employeesData,
    setEmployeesData,
    usersData,
    setUsersData,
    allEmployeesData,
    setAllEmployeesData,
    attendanceData,
    setAttendanceData
  };
  /*******************************************************************/

  return (
    <RootContext.Provider value={defaultContext}>
      {children}
    </RootContext.Provider>
  );
};
