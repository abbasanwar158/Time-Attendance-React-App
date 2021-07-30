import React, { useEffect, useState } from "react";

export const RootContext = React.createContext();


export default ({ children }) => {

  const [ActiveEmployeeNames, setActiveEmployeeNames] = useState([])
  const [leavesData, setLeavesData] = useState([])
  const [employeesData, setEmployeesData] = useState([])
  const [index, setIndex] = useState('')
  /*****all root context variables and function ********************/
  const defaultContext = {
    ActiveEmployeeNames,
    setActiveEmployeeNames,
    leavesData,
    setLeavesData,
    index,
    setIndex,
    employeesData,
    setEmployeesData
  };
  /*******************************************************************/

  return (
    <RootContext.Provider value={defaultContext}>
      {children}
    </RootContext.Provider>
  );
};
