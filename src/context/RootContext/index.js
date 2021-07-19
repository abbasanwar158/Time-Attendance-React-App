import React, { useEffect, useState } from "react";

export const RootContext = React.createContext();

export default ({ children }) => {
    /*****getting values from local storage if any***************************/
    const prevUser = JSON.parse(window.localStorage.getItem("user")) || null;

    // const tutorialFlag = localStorage.getItem("tutorialFlag") || null;
    /**********************************************************************/

    /*****setting values from local storage to constants*******************/
    const [currentUser, setCurrentUser] = useState(prevUser);

    /*****************************************************************/

    /*****setting values to local storage*****************************/
    useEffect(() => {
        if (!currentUser) {
            localStorage.clear();
        }
    }, [
        currentUser,
    ]);
    /*******************************************************************/

    /*****all root context variables and function ********************/
    const defaultContext = {
        currentUser,
        setCurrentUser,
    };
    /*******************************************************************/

    return (
        <RootContext.Provider value={defaultContext}>
            {children}
        </RootContext.Provider>
    );
};
