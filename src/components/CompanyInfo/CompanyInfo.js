import React from "react";
import styles from "./CompanyInfo.module.css";
import MenuBar from "../MenuBar/MenuBar";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const CompanyInfo = () => {
  return (
    <>
      <MenuBar />
      <div className={styles.details}>
        <h2>Company: Geeksynergy Technologies Pvt Ltd</h2>
        <p>
          <strong>Address:</strong> Sanjayanagar, Bengaluru-56
        </p>
        <p>
          <strong>Phone:</strong> XXXXXXXXX09
        </p>
        <p>
          <strong>Email:</strong> XXXXXX@gmail.com
        </p>
      </div>
      <NavLink to="/home"><Button variant="secondary" className={styles.backbutton}>Go Back</Button></NavLink>
    </>
  );
};

export default CompanyInfo;
