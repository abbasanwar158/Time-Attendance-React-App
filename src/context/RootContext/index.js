import React, { useEffect, useState } from "react";

export const RootContext = React.createContext();


export default ({ children }) => {

  const [ActiveEmployeeNames, setActiveEmployeeNames] = useState([])

  /*****all root context variables and function ********************/
  const defaultContext = {
    ActiveEmployeeNames,
    setActiveEmployeeNames,
  };
  /*******************************************************************/

  return (
    <RootContext.Provider value={defaultContext}>
      {children}
    </RootContext.Provider>
  );
};
