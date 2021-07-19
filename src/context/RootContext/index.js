import React, { useEffect, useState } from "react";

export const RootContext = React.createContext();


var employeeNamesArr = [];
fetch("http://attendance.devbox.co/api/v1/employees")
  .then(res => res.json())
  .then(
    (response) => {
      var abc = response.data.filter((x) => x.active)
      for (var i = 0; i < abc.length; i++) {
        employeeNamesArr.push(abc[i].name)
      }
    },
    (error) => {
      console.log("error", error)
    }
  )

export default ({ children }) => {

  const [ActiveEmployeeNames, setActiveEmployeeNames] = useState([])

  /*****************************************************************/

  /*****setting values to local storage*****************************/
  useEffect(() => {
    setActiveEmployeeNames(employeeNamesArr)
  });
  /*******************************************************************/

  /*****all root context variables and function ********************/
  const defaultContext = {
    ActiveEmployeeNames,
  };
  /*******************************************************************/

  return (
    <RootContext.Provider value={defaultContext}>
      {children}
    </RootContext.Provider>
  );
};
