import React, { useEffect, useState } from "react";

export const RootContext = React.createContext();


export default ({ children }) => {

  const [ActiveEmployeeNames, setActiveEmployeeNames] = useState([])
  const [leavesDataRoot, setLeavesDataRoot] = useState([])
  const [leavesIndex, setleavesIndex] = useState('')
  /*****all root context variables and function ********************/
  const defaultContext = {
    ActiveEmployeeNames,
    setActiveEmployeeNames,
    leavesDataRoot,
    setLeavesDataRoot,
    leavesIndex,
    setleavesIndex
  };
  /*******************************************************************/

  return (
    <RootContext.Provider value={defaultContext}>
      {children}
    </RootContext.Provider>
  );
};
