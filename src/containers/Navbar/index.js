import React, { useState, useContext, useEffect } from "react";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return(
    <div className={styles.container}>
      <img 
        className={styles.logo} 
        width="150px" 
        src={`${process.env.PUBLIC_URL}/images/logo.png`}
      />
    </div>
  );
}