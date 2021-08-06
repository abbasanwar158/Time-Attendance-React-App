import React, { useState, useContext, useEffect } from "react";
import styles from "./pageNotFound.module.scss";

export default function PageNotFound() {
  const returnHomepage = () => {
    window.location.href = `${process.env.PUBLIC_URL}/`;
  }
  return (
    <div className={styles.container}>
      <div className={styles.blobDiv}>
        <img
          className={styles.blob}
          src={`${process.env.PUBLIC_URL}/images/Blob.svg`}
          alt="0"
        />
        <img
          className={styles.blob404}
          src={`${process.env.PUBLIC_URL}/images/404.svg`}
          alt="0"
        />
        <span className={styles.oopsText}>Oops! The page you are looking for does not exist.</span>
        <button className={styles.returnButton} onClick={returnHomepage}>Return home</button>
      </div>
    </div>
  );
}
